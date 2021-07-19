let tabProd = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];
let col = ""

class Tableau extends React.Component {
    affLigne(data, key) {

        if(data.stocked == false){
            col = "red"
        }else{
            col = "black"
        }

        return (
            <tr key={key}>
                <td>
                    {data.category}
                </td>
                <td style={{color:col}}>
                    {data.name}
                </td>
                <td>
                    {data.price}
                </td>
            </tr>
        )
    }

    search(){
        return (
            <div>
            <input type="text" />
            <button>Chercher</button>
            </div>
        )
    }

    rayons(){
        let distinctRayon = tabProd.filter((ligne, indice, tableau)=>{
            return tableau.findIndex((elem)=> elem.category === ligne.category)===indice
        })
        return distinctRayon
    }

    produits(nomRayon){
        let produitRayon = tabProd.filter((ligne, indice, tableau)=>{
            return ligne.category===nomRayon
        })
        return produitRayon
    }

    render() {
        let rayons = this.rayons()
        return (
            <section>
                <table>
                    <thead>
                    <tr>
                        <th>Catégorie</th>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            tabProd.map((ligne, key)=>{
                                return this.affLigne(ligne, key)
                            })
                        }
                    </tbody>

    {/*-------------------------------------- TEST ---------------------------------*/}
                    <tbody>
                        {
                            rayons.map((ligne)=>{
                                return <Rayon categ={ligne.category}></Rayon>
                            })
                        }
                    </tbody>
    {/*-------------------------------------- TEST ---------------------------------*/}

                </table>
                {this.search()}
                {console.log(this.produits("Electronics"))}
            </section>
        )
    }
}


class Rayon extends React.Component {
    render(){
        return (
                <tr>
                    <td colSpan="2">
                        {this.props.categ}
                    </td>
                </tr>
        )
    }
}

let texte = <Tableau />

ReactDOM.render(texte, document.getElementById("app"))



// {
//     rayons.map((ligne)=>{
//         return <Rayon categ={ligne.category}></Rayon>
//     })
// }