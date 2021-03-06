<!DOCTYPE html>
<html>
  <head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-35918300-6"></script>
    <meta name="google-site-verification" content="hnu-itE1iSYqoffQF3M4kFGOIUyeGVe6HoYNlzfnCpA" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ isset($site_title) ? $site_title : env('SITE_NAME') }}</title>

    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>

    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <meta name="author" content="name">
    <meta name="description" content="{{ $site_description ?? env('SITE_DESCRIPTION') }}">
    <meta name="keywords" content="{{ $site_keywords ?? env('SITE_KEYWORDS') }}">

    <meta property="og:site_name" content="{{ env('SITE_NAME') }}">
    <meta property="og:title" content="{{ $site_title ?? env('SITE_NAME') }}"/>
    <meta property="og:type" content="{{ $site_type ?? 'website' }}"/>
    <meta property="og:url" content="{{ $site_url ?? Illuminate\Support\Facades\URL::current() }}"/>
    <meta property="og:image" content="{{ $site_image ?? secure_url('/images/og-banner-ccb-7-nov.jpg') }}"/>
    <meta property="og:description" content="{{ $site_description ?? env('SITE_DESCRIPTION') }}"/>

    <meta name="twitter:title" content="{{ $site_title ?? env('SITE_NAME') }}">
    <meta name="twitter:description" content="{{ $site_description ?? env('SITE_DESCRIPTION') }}">
    <meta name="twitter:image" content="{{ $site_image ?? secure_url('/images/og-banner-ccb-7-nov.jpg') }}">
    <meta name="twitter:card" content="summary_large_image">

    <link rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=fallback" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('/css/compiled/common.css') }}"/>
    @if( isset($_GET['light']) )
    <link rel="stylesheet" href="/css/light-mode.css?<?=time()?>"/>
    @endif
    @yield('header')
  </head>
  <body class="bg-dark text-white" data-scroll="1">
    @if(!isset($hide_header))
    <header class="border-bottom border-dark">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">

          <a href="/" class="text-white">
            <div class="d-md-none d-flex align-items-center" style="line-height: 1rem;">
              <!--img src="/images/crab.svg" onerror="this.onerror=null; this.src='/images/crab.png'" alt="CCB" class="img-fluid mr-3" style="width: 36px;"-->
              <div style="letter-spacing: 3px; font-size: .8rem;">The CCBs</div>
            </div>
          </a>

          <button class="navbar-toggler mt-1 mb-1" type="button" data-toggle="collapse" data-target="#headerNav" aria-controls="headerNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-md-center" id="headerNav">
            <ul class="navbar-nav">
              <li class="nav-item {{ (isset($active_page) && $active_page == 'home') ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="/">
                  <i class="fas fa-home animated pulse slower infinite delay-0.5s"></i>
                  <div>Home</div>
                </a>
              </li>
              <li class="nav-item {{ (isset($active_page) && $active_page == 'weeklies') ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="/weeklies">
                  <i class="fas fa-info animated pulse slower infinite delay-0.5s"></i>
                  <div>Weeklies</div>
                </a>
              </li>
              <li class="nav-item {{ (isset($active_page) && in_array($active_page, ['clan', 'roster', 'clan_member_activities_listing', 'lockouts', 'seals', 'seals_breakdown', 'clan_exotic']) ) ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="/clan/roster">
                  <i class="ra ra-double-team"></i>
                  <div>Roster</div>
                </a>
                <!--div class="drop-down-menu animated fadeIn faster">
                  <ul>
                    <li class="nav-item {{ (isset($active_page) && in_array($active_page, ['roster', 'clan_member_activities_listing'])) ? 'active' : ''  }}">
                      <a href="/clan/roster">Roster</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'lockouts') ? 'active' : ''  }}">
                      <a href="/clan/lockouts">Raid Lockouts</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && in_array($active_page, ['seals', 'seals_breakdown'])) ? 'active' : ''  }}">
                      <a href="/clan/seals">Seal Completions</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'clan_exotic') ? 'active' : ''  }}">
                      <a href="/clan/exotics">Exotic Collection</a>
                    </li>
                  </ul>
                </div-->
              </li>
              <li class="nav-item {{ (isset($active_page) && in_array($active_page, ['stats', 'weapons', 'pve', 'pvp', 'trials', 'gambit', 'gambit_prime', 'raid_buddy', 'raid_buddies', 'raid_buddy_activities', 'pvp_buddy', 'pvp_buddies', 'pvp_buddy_activities', 'gambit_buddy', 'gambit_buddies', 'gambit_buddy_activities']) ) ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="/stats">
                  <i class="far fa-chart-bar animated pulse slower infinite delay-0.5s"></i>
                  <div>Stats</div>
                </a>
                <div class="drop-down-menu animated fadeIn faster">
                  <ul>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'stats') ? 'active' : ''  }}">
                      <a href="/stats/raid">Raid Completions</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'weapons') ? 'active' : ''  }}">
                      <a href="/stats/weapons">Weapon Kills</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'pve') ? 'active' : ''  }}">
                      <a href="/stats/pve">PvE</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'pvp') ? 'active' : ''  }}">
                      <a href="/stats/pvp">PvP</a>
                    </li>
                    <!--li class="nav-item {{ (isset($active_page) && $active_page == 'trials') ? 'active' : ''  }}">
                      <a href="/stats/trials">Trials</a>
                    </li-->
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'gambit') ? 'active' : ''  }}">
                      <a href="/stats/gambit">Gambit</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && $active_page == 'gambit_prime') ? 'active' : ''  }}">
                      <a href="/stats/gambit-prime">Gambit Prime</a>
                    </li>
                    <!--li class="nav-item {{ (isset($active_page) && in_array($active_page, ['raid_buddy', 'raid_buddies', 'raid_buddy_activities'])) ? 'active' : ''  }}">
                      <a href="/stats/raid/buddy">Raid Buddies</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && in_array($active_page, ['pvp_buddy', 'pvp_buddies', 'pvp_buddy_activities'])) ? 'active' : ''  }}">
                      <a href="/stats/pvp/buddy">PvP Buddies</a>
                    </li>
                    <li class="nav-item {{ (isset($active_page) && in_array($active_page, ['gambit_buddy', 'gambit_buddies', 'gambit_buddy_activities'])) ? 'active' : ''  }}">
                      <a href="/stats/gambit/buddy">Gambit Buddies</a-->
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item {{ (isset($active_page) && $active_page == 'raid_events') ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="/raids">
                  <i class="fas fa-calendar-check"></i>
                  <div>Raids</div>
                </a>
              </li>
              <li class="nav-item {{ (isset($active_page) && $active_page == 'guides') ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="/guides">
                  <i class="fas fa-book"></i>
                  <div>Guides</div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-md-center" href="{{ env('DISCORD_LINK') }}" target="_blank">
                  <i class="fab fa-discord animated pulse slower infinite delay-0.5s"></i>
                  <div>Discord</div>
                </a>
              </li>
              <li class="nav-item {{ (isset($active_page) && $active_page == 'join_us') ? 'active' : ''  }}">
                <a class="nav-link text-md-center" href="https://www.bungie.net/en/ClanV2/Chat?groupId=4003874" target="_blank">
                  <i class="fas fa-door-open animated pulse slower infinite delay-0.5s"></i>
                  <div>Join Us</div>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    @endif

    <main class="d-flex flex-column">
    @yield('body')
    </main>

    <section id="members-online" class="w-100 text-center" data-show="0">
      <div class="p-2" id="members-online-text">
        <i class="fas fa-circle fa-sm text-success mr-1" style="font-size: 0.6rem;position: relative; bottom: 1px;"></i> <span id="member-count">2 members</span> online
        <small id="members-online-toggle-icon" data-status="up" class="pr-3"><i class="fas fa-chevron-down fa-lg animated rotateIn delay-0.5s"></i></small>
      </div>
      <div id="members-online-table" class="p-2 border-top border-dark"></div>
    </section>

    <footer class="border-top border-dark">
      <div id="footer" class="text-center py-4 px-3">
        <div>
          <small class="text-white">&copy; <?=date('Y')?> {{ env('APP_DISPLAY_URL') }}</small>
        </div>
        <div>
          <small class="text-white">Developed by <a href="https://www.bungie.net/en/Profile/3/4611686018474971535" target="_blank">xenodus</a> | 3D6rPSmgxhvuo5hZSVzjAQ4XT66VH7R3i2</small>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>

      <script src="{{ mix('/js/compiled/common.js') }}"></script>
      @yield('footer')
    </footer>
  </body>
</html>