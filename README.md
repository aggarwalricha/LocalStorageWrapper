
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <title>Local storage wrapper Test</title>
    <script type="text/javascript" src="localStorage.js"></script>
    <script>
        //1. "Storage": 
        console.info(window.localStorage.constructor);

        setLocalStorageDomain("www.domain1.com");
        
        localStorage.setItem('a', 'b');

        //2. "b"
        console.log(localStorage.getItem('a'));

        //3. {"a","b"}
        console.log(window._localStorage.getItem('www.domain1.com'));

        //4. {'a'}
        for (var k in localStorage)
        {
            console.log(k);
        }

        //5. "1"
         console.log(window.localStorage.length);

        //6.
         window.setLocalStorageDomain("www.domain2.com");
         window.localStorage.setItem('c', 'd');
         window.localStorage.setItem('e', 'f');

        //7. 'd', 'f'
        console.log(window.localStorage.getItem('c'));
        console.log(window.localStorage.getItem('e'));

        //8. {"c":"d", 'e':'f'}
         console.log(window._localStorage.getItem('www.domain2.com'));

        //9. {'c', 'e'}
        for (var k in window.localStorage)
        {
            console.log(k);
        }

        //10. "2"
        console.log(window.localStorage.length);

　
    </script>
</head>
<body>
</body>
</html>
