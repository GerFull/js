class GotSerice {

    constructor(){
        this._apibase ='https://www.anapioficeandfire.com/api'
    }

   async getResourse(url){
        const res = await fetch(`${this._apibase}${url}`);
    
        if (!res.ok){
            throw new Error (`Could  not fetch ${url} , status ${res.status}`);
        }
    
        return await res.json();
    };

    getAllCharacter(){
        return this.getResourse('/characters?page=6&pageSize=10')
    }

    getCharacter(id){
        return this.getResourse(`/characters/${id}`)   
    }
}

const got = new GotSerice();

got.getAllCharacter()
.then((res) => {
    res.forEach(element => {asdfasdfadsfasdfasdf
        console.log(element.name)
    });
});

got.getAllCharacter().then((res) => console.log(res));