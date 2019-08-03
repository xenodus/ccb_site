@extends('layouts.template')

@section('body')
<section id="seal-completions" class="container-fluid text-center mb-4">
  <div class="mt-4 mb-4">
    @include('clan.nav')
  </div>
  <div class="loader"></div>
  <div class="loader-text mb-4">Fetching Members...</div>

  <div class="stats-container"></div>
</section>
@endsection

@section('header')
<link rel="stylesheet" href="{{ mix('/css/compiled/clan.css') }}"/>
@endsection

@section('footer')
<script src="/js/compiled/exotic.js?time=<?=time()?>"></script>
@endsection