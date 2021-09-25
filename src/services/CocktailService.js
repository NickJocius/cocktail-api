import axios from 'axios';

export default class CocktailService {
    getCategories () {
        return axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list").then(res => res.data.drinks);
    }

    getCategory(name) {
        const newName = name.split(' ').join('_');
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${newName}`).then(res => res.data.drinks);
    }

    getDetails(id) {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.data.drinks);
    }

    getIngredient(id) {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`).then((res) => res.data.ingredients);
    }
}