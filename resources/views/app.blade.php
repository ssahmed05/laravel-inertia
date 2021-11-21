<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="copyright" content="MACode ID, https://macodeid.com/">
    <link rel="stylesheet" href="{{ asset('css/maicons.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/animate/animate.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/owl-carousel/css/owl.carousel.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/fancybox/css/jquery.fancybox.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme.css') }}">

    <title>{{ $title ?? "" }}</title>

    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />

    <script src="{{ mix('/js/app.js') }}" defer></script>

    <script>
        window.base_url = '{{ url('/') }}';
    </script>
  </head>
  <body>
    @inertia
  </body>
  <script src="{{ asset('js/jquery-3.5.1.min.js') }}"></script>
  <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
  <script src="{{ asset('vendor/owl-carousel/js/owl.carousel.min.js') }}"></script>
  <script src="{{ asset('vendor/wow/wow.min.js') }}"></script>
  <script src="{{ asset('vendor/fancybox/js/jquery.fancybox.min.js') }}"></script>
  <script src="{{ asset('vendor/isotope/isotope.pkgd.min.js') }}"></script>
  <script src="{{ asset('js/theme.js') }}"></script>
</html>
