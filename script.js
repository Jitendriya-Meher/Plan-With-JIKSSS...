const data = [
	{
		id: 1,
		name: "Agra",
		info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
		image: "https://cdn.thecodehelp.in/Agra.jpeg",
		price: "35,758",
	},
	{
		id: 2,
		name: "Jaipur",
		info: `Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the "Pink City" due to the color of many of its buildings. Jaipur is famous for its intricate textiles, colorful handicrafts, and delicious cuisine.`,
		image: "https://cdn.thecodehelp.in/Jaipur.jpeg",
		price: "82,560",
	},
	{
		id: 3,
		name: "Goa",
		info: " Goa is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.",
		image: "https://cdn.thecodehelp.in/Goa.jpeg",
		price: "29,695",
	},
	{
		id: 4,
		name: "Varanasi",
		info: "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals.",
		image: "https://cdn.thecodehelp.in/Varanasi.jpeg",
		price: "31,095",
	},
	{
		id: 5,
		name: "Darjeeling",
		info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
		image: "https://cdn.thecodehelp.in/Darjeeling.jpeg",
		price: "78,595",
	},
	{
		id: 6,
		name: "Jaisalmer",
		info: "Jaisalmer is a city in the Indian state of Rajasthan, known for its stunning sandstone architecture and its location in the heart of the Thar Desert. The city is home to several impressive palaces and fortresses, as well as unique cultural traditions and handicrafts.",
		image: "https://cdn.thecodehelp.in/Jaisalmer.jpeg",
		price: "68,595",
	},
	{
		id: 7,
		name: "Kochi",
		info: "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian, Portuguese, and other influences.",
		image: "https://cdn.thecodehelp.in/Kochi.jpeg",
		price: "68,595",
	},
];

const cards = document.querySelector(".cards");

const container = document.querySelector(".container");
const refresh = document.querySelector(".refresh");

let length;

function display(){

    cards.classList.remove("hide");
    refresh.classList.add("hide");

    length = data.length;
    const newCards = data.map( (card,index) =>{
        return `<div class="card">

                    <img src=${card.image} alt="" class="image" />
            
                    <div class="tour-info">
                        <div class="tour-details">
                            <h4 class="tour-price">₹ ${card.price}</h4>
                            <h4 class="tour-name">${card.name}</h4>
                        </div>
                    </div>
            
                    <div class="description">
                        <span>${card.info.substring(0,200)}</span>
                        <span class="read-more" onclick="readMore(this,${index})">
                        read-more
                        </span>
                    </div>
            
                    <button class="btn-red" onclick="remove(this,${index})">
                        Not Intrested
                    </button>
                        
                </div>`
    })

    const datas = newCards.join("");
    cards.innerHTML = datas;
}

display();

function readMore(datas,index){
    const parent = datas.parentElement;
    const container = parent.querySelector("span");
    console.log(datas,index,parent,container);
    
    if( container.innerHTML.length > 200){
        container.innerHTML = data[index].info.substring(0,200);
        datas.innerHTML = "read-more";
    }else{
        container.innerHTML = data[index].info;
        datas.innerHTML = "read-less";
    }
}

function remove( datas, index){
    const parent = datas.parentElement;
    console.log(datas.parent);

    parent.remove();
    length--;
    
    if( length == 0 ){
        cards.classList.add("hide");
        refresh.classList.remove("hide");
    }
}

const refreshBtn = document.querySelector(".btn-white");

refreshBtn.addEventListener("click",()=>{
    display();
});
