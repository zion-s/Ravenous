const apiKey = '-r7EmnsnDYPU9CvoS_C2N7xgFhbW1DssbkL9Cke_NePaWkKpfiIUL0jIaVf6KtxKe5ufouWz3dsLDKLZKbBl12EbYAdtDI2k0BF5cg2F0tttA248ruffVNbu5tP4XnYx';
//CLient Id not needed; Just for reference
//const clientID = gYELFHXOb7bRYeN0bPeH9Q;

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
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