function MyButton(){
    return(
        <button>
            Olen button.
        </button>
    );
}

export default function myApp(){

    return(
        <div>
            <h1>
                Heippa hei !
                <MyButton/>
            </h1>
        </div>
    )
}