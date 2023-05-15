const product = require('../model/product')

const getAllProducts =  async(req,res)=>{
    
    const {company,name,featured,sort,select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
    } 

    if(name){
        queryObject.name = name;
    }

    if(featured){
        queryObject.name = featured;
    }

    if(name){
        queryObject.name = {$regex : name,R$option : 'i'};//name select
    }

    let apiData= product.find(queryObject)

    if(sort){
        let sortfix = sort.replace(",","");
       apiData = apiData.sort(sortfix)
    }

    if(select){
        let selectfix = select.split(",").join(" ");
       apiData = apiData.select(selectfix)
    }

    let page = Number(req.query.page)||1;
    let limit = (req.query.limit) || 10;

    let skip = (page-1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);


    const Products = await apiData
    res.status(200).json({Products,nbHits : Products.length});
}
const getAllproductsTesting =  async(req,res)=>{
const Products = await product.find(req.query)
console.log(req.query);
res.status(200).json({Products,nbHits : Products.length});
} 

module.exports = {getAllProducts,getAllproductsTesting}
