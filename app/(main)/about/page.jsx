// export  const metadata ={
//     title : {
//         //absolute : "About "
//         default : "About"
//     }
// }

export function generateMetadata({params , searchParams}){
    console.log(searchParams);
    return{
        title : searchParams.name
    }
}

const About =() =>{
    return(
        <div>
            <h3>About me</h3>
        </div>
    )
};
export default About;