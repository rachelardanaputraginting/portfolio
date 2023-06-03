<!DOCTYPE html>
<html class="scroll-smooth"
      lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect"
          href="https://fonts.bunny.net">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-fourth mx-2 sm:mx-0">
    @inertia
</body>

<script>
    const mouseWheel = document.querySelector('.scrolling-wrapper');

    // Add wheel function
    mouseWheel.addEventListener('wheel', function(e) {

        const race = 30; // <= set scroll mouse move the wheels

        if (e.deltaY > 0) // <= Scroll right
            mouseWheel.scrollLeft += race;
        else // Scroll left
            mouseWheel.scrollLeft -= race;
        e.preventDefault();
    });
</script>

</html>
