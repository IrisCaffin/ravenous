const apiKey = 'N-ZjXsD5Idq4svhF1Qy6U2H0D3IW5dIJZF2h-qAyzJJVofQpofDUMurc2IWSv0uOh6a40L_JSgus8HxpoDzQppyYola_qE8rrG03GfreID1YLukFsALgRufOjEgvWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
      return response.json();
    }).then(jsonReponse => {
      if (jsonReponse.businesses) {
        return jsonReponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
        }));
      }
    });
  }
};



export default Yelp;
