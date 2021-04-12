<!doctype html>
<html>
<script>
    alert("alert")
    document.write("<h1>welcome</h1>")
    console.log("introduction to html")
    console.log("JS is case sensitive")
    console.log("JS is client side scripting language")
    console.log("JS is used to make page interactive")

    var a
    a=10
    console.log(typeof(a))
    a=true
    console.log(typeof(a))
    var a 
    console.log(a)
    console.log(typeof(a))
    var b
    b=a
    console.log(b)

    if (b) {
        console.log("b is boolean")
        
    }

    for (i=0;i<10;i++){
        console.log(i)
        document.write(i)
    }

    function hello(a,b){
    console.log("calling function")
    } 
    hello(10,20)
</script>
</html>
