export default function SecondChild({num} : any) {
    console.log('Props:', num);
    
    console.log("second child render..",Math.random());
    return (
        <h1>
            {num}  
        </h1>
    )
}