// Client ID
// riQ0Od8kBLnzzdrFtXth5A

const apiKey='n8PxXkg8GVPnpEXZ4Wiw6PStQDmeYTTC9Folz27-2PUr2i8GJITPfBXN9wJIAp8dcgEJAKNeZPE7b0_k_m4WPPVwwqW-gaNKOUYPmL83qLx8SMpq3I6iuLikzPaHXnYx';
// test comment
const Yelp = {
    search(term, location, sortBy){
        return (
            // making request to this url with some values
            fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
            // cors-anywere bypasses some kind of restriction
            .then(response=>{return response.json()})
            .then(jsonResponse=>{if(jsonResponse.businesses)
                {
                    return jsonResponse.businesses.map(business=>(
                        {
                            id: business.id,
                            imageSrc: business.image_url ,
                            name: business.name ,
                            address: business.location.address1 ,
                            city: business.location.city ,
                            state: business.location.state ,
                            zipCode: business.location.zip_code ,
                            rating: business.rating ,
                            reviewCount: business.review_count ,
                        }
                    ))
                }
            }
            )
        )},
};

export default Yelp;