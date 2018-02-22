
console.log(6 === add(2,4))
console.log(6 === sub(8,2))
console.log(6 === multiple(3,2))

tester( 6 ,sub(12,6),"its not good" ) ;

//console.log(6 === ran1)
function add (x,y)
{
    return x+y;
}

function sub(x,y) {
    return x-y;
}
function multiple(x,y) {
    return x*y;
}
function devide(x,y) {
    return x/y;
}

function tester (x,y,m)
{

   
   if (x===y )
    {
        return true;
    }
    else
    {
        console.log(m)
    }




}