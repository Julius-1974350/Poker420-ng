export function tr(msg:string, dial:Boolean = false, conso:Boolean = true)
{
    if (dial) {
        alert(msg);
    }
    if (conso) {
        console.log(msg);
    }
}

export const urlServeur = "http://localhost/poker420-sf/public/index.php";