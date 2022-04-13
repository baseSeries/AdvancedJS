{
    function foo () {
        var name = "foo";
        var age = 18;
        function bar () {
            console.log("bar", name);
        }
        return bar;
    }

    var fn = foo();

    fn()












}