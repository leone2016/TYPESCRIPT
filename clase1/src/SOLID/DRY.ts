console.log("¡Clase 1!");
type Size = '' | 'S' | 'M' | 'L';
class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) {
    }

    toString(): string {
        // if(this.name.length <=0)  throw new Error("Name is required");
        // if(this.price <=0)  throw new Error("price does not to be zero");
        // if(this.size.length ===0)  throw new Error("size is required");
        for (let key in this){
            switch (typeof this[key]){
                case 'string':
                    if(this[key].length <= 0) throw new Error(` ${key} is required`);
                    break;
            }
        }

        return `Product ${this.name}, $(${this.price}) USD, Size: ${this.size}`;
    }
}
(()=>{
    const pant = new Product(" Blue large Pants", 35, 'L')
    console.log(pant.toString());
})();