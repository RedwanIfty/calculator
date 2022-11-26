import { Link } from "react-router-dom"
const Map=()=>{
    const person=[
        {
            "name":"Ifty1234567",
            "age":25,
            "Occupation":"Student"
        },
        {
            "name":"Raihan",
            "age":18,
            "Occupation":"Student"
        },
        {
            "name":"Barsha",
            "age":24,
            "Occupation":"Student"
        }
    ]
    return(
        <div>
            <table border={5}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Occupation</th>
                </tr>
            {
                person.map(p=>{
                return(
                   <>
                    <tr>
                        <td>{p.name.matchAll('Ifty')}</td>
                        <td>{p.age}</td>
                        <td>{p.Occupation}</td>
                    </tr>
                   </>
                )            
             })
             }
             </table>
            
           </div>
    )
}
export default Map;