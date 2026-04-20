function Card({img, title, desc}){
    return(
        <div className="card">
            <img src={img} alt="" />
            <div>
                <h2 className="font-bold text-2xl">{title}</h2>
                <p>{desc}</p>
                <button>Explore More</button>
            </div>
        </div>
    )
}
// props = {
//     title: 'value'
//     desc: 'value'
// }
// const title = props.title
// const desc = props.desc

export default Card