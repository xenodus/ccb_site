@extends('layouts.template')

@section('header')
<link rel="stylesheet" href="{{ mix('/css/compiled/post.css') }}"/>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-2393161407259792",
    enable_page_level_ads: true
});
</script>
@endsection

@section('body')
<section id="guide-listing" class="text-center container mt-5 mb-5">
  <div>
    <nav aria-label="breadcrumb" style="display: none;">
      <ol class="breadcrumb bg-transparent pl-0" itemscope itemtype="https://schema.org/BreadcrumbList">
        <li class="breadcrumb-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
          <a itemprop="item" itemtype="https://schema.org/WebPage"
              href="{{ route('guide_index') }}">
            <span itemprop="name">Guides</span></a>
          <meta itemprop="position" content="1">
        </li>
      </ol>
    </nav>
  </div>
  <div class="mb-4 text-yellow d-flex justify-content-start align-items-center">
    <div id="latest-post-header-icon"></div>
    <h1>Latest Guides</h1>
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row">
        @foreach($posts as $post)
          @include('guides.postItemHorizontal')

          @if($posts->count() >= 6 && $loop->iteration == round($posts->count() / 2))
          <div class="col-md-12 mb-4">
            <div class="overflow-hidden">
              @include('ads.horizontal')
            </div>
          </div>
          @endif
        @endforeach
      </div>
    </div>
    <div class="col-md-3 col-sm-12">
      @include('guides.widgets.sidebarNav')
    </div>
  </div>
  <div class="pagination-container text-center mt-2">
    @if( !$posts->onFirstPage() )
      <a href="{{ $posts->previousPageUrl() }}" class="mr-2"> <i class="fas fa-angle-double-left"></i> Prev Page</a>
    @endif
    @if( $posts->hasMorePages()  )
      <a href="{{ $posts->nextPageUrl() }}" class="ml-2">Next Page <i class="fas fa-angle-double-right"></i></a>
    @endif
  </div>
</section>
@endsection

@section('footer')
<script type="text/javascript">
  var news_listing_category_slug = "{{$top_category->term->slug ?? ''}}";
</script>
<script src="{{ mix('/js/compiled/post.js') }}"></script>
@endsection