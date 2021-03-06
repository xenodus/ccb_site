<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App;
use DB;
use Cache;

class UpdateSeals extends Command
{
    // Seals
    private $seal_hash = [
      'Rivensbane' => 2182090828,
      'Cursebreaker' => 1693645129,
      'Chronicle' => 1754983323,
      'Unbroken' => 3369119720,
      'Dredgen' => 3798931976,
      'Wayfarer' => 2757681677,
      'Blacksmith' => 2053985130,
      'Reckoner' => 1313291220,
      'Shadow' => 1883929036,
      'MMXIX' => 2254764897,
      'Undying' => 2707428411,
      'Harbinger' => 3793754396,
      'Enlightened' => 3387213440,
      'Savior' => 2460356851,
      'Flawless' => 2945528800,
      'Conqueror' => 1983630873,
      'Almighty' => 2860165064
    ];

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:seals';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update members\' seal progression';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $error = false;
        $failures = [];
        $results = [];

        $this->seal_hash = array_reverse($this->seal_hash);

        $client = new Client(['http_errors' => false, 'verify' => false]); //GuzzleHttp\Client
        $clan_members = \App\Classes\Clan_Member::get();

        $this->info('Begin: Update Seals');

        $n = 1;

        foreach($clan_members as $member) {

            $this->info('Processing '.$n.' of '.count($clan_members).': ' . $member->display_name);
            $n++;

            $response = $client->get(
              env('BUNGIE_API_ROOT_URL').'/Destiny2/'.$member->membershipType.'/Profile/'.$member->id.'?components=900',
              [
                'headers' => [
                  'X-API-Key' => env('BUNGIE_API')
                ]
              ]
            );

            if( $response->getStatusCode() == 200 ) {
                $payload = json_decode($response->getBody()->getContents());
                $payload = collect($payload);

                $seal_completion = [];

                if( isset($payload['Response']->profileRecords->data) == false )
                  continue;

                foreach($this->seal_hash as $title => $id) {
                    $seal_completion[$title] = 0;

                    if( isset($payload['Response']->profileRecords->data->records->$id) ) {
                      $seal_completion[$title] = $payload['Response']->profileRecords->data->records->$id->objectives[0]->complete ? 1 : 0;
                    }
                    else {
                      // Check chars
                      if( isset($payload['Response']->characterRecords->data) ) {
                        $chars = collect($payload['Response']->characterRecords->data);

                        if( count($chars) ) {
                          foreach($chars as $char) {
                            if( isset($char->records->$id) ) {
                              $seal_completion[$title] = $char->records->$id->objectives[0]->complete ? 1 : 0;
                            }
                          }
                        }
                      }
                    }
                }

                $member->seal_completion = $seal_completion;
                $member->seal_status = true;
            }
            else {
                $error = true;
                $failures[] = $member;
                $member->seal_status = false;
            }
        }


        DB::table('seal_completions')->truncate();

        foreach($clan_members as $member) {
          if( $member->seal_status == true ) {
            $seal_completion = new App\Classes\Seal_Completions();
            $seal_completion->id = $member->id;
            $seal_completion->data = json_encode($member->seal_completion);
            $seal_completion->date_added = \Carbon\Carbon::now()->format('Y-m-d H:i:s');
            $seal_completion->save();
          }
        }

        // Refresh Cache
        Cache::forget('clan_seal_completions');
        Cache::forever('clan_seal_completions', App\Classes\Seal_Completions::get());

        $this->info('Completed: Update Seals');
        return 1;
    }
}
