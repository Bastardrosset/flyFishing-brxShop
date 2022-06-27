import bar_blue from './images/images/bar_blue.jpg';
import bar_green from './images/images/bar_green.jpg';
import bar_lightBlue from './images/images/bar_lightBlue.jpg';
import bass_green from './images/images/bass_green.jpg';
import bass_red from './images/images/bass_red.jpg';
import bass_yellow from './images/images/bass_yellow.jpg';
import tiger_frog from './images/images/tiger_frog.jpg';
import BB_bass from './images/images/BB_bass.jpg';
import BB_pike from './images/images/BB_pike.jpg';
import lizard from './images/images/lizard.jpg';
import crazy_frog from './images/images/crazy_frog.jpg';
import pike from './images/images/pike.jpg';


const products = [
    {
        _id:'1',
        name:'Pop BBlue',
        image:`${bar_blue}`,
        description:'Petit popper bleu pour la pêche du bar en surface',
        utilite:'Monté sur Hameçon KAMASAN, les bars ne résisterons à l\'attraction de ce petit popper',
        category:'Popper',
        countInStock:'10',
        size:'Size: 3/0',
        price:'10€',
    },
    {
        _id:'2',
        name:'Pop BGreen',
        image:`${bar_green}`,
        description:'Petit popper vert pour la pêche du bar en surface',
        utilite:'Monté sur Hameçon KAMASAN, les bars ne résisterons à l\'attraction de ce petit popper',
        category:'Popper',
        countInStock:'0',
        size:'Size: 3/0',
        price:'10€',
    },
    {
        _id:'3',
        name:'Pop BLightBlue',
        image:`${bar_lightBlue}`,
        description:'Petit popper argenté pour la pêche du bar en surface',
        utilite:'Monté sur Hameçon KAMASAN, les bars ne résisterons à l\'attraction de ce petit popper',
        category:'Popper',
        countInStock:'10',
        size:'Size: 3/0',
        price:'10€',
    },
    {
        _id:'4',
        name:'Bass Green',
        image:`${bass_green}`,
        description:'Popper camo marbré et vert pour la pêche du Black Bass',
        utilite:'Montés sur Hameçon Gamakatsu, ce petit popper vous permettera de traquer le Black Bass dans les endroits les plus encombrés',
        category:'Popper',
        countInStock:'10',
        size:'Size: 1/0',
        price:'8€',
    },
    {
        _id:'5',
        name:'Bass Red',
        image:`${bass_red}`,
        description:'Popper camo rouge et orange pour la pêche du Black Bass',
        utilite:'Montés sur Hameçon Gamakatsu, ce petit popper vous permettera de traquer le Black Bass dans les endroits les plus encombrés',
        category:'Popper',
        countInStock:'10',
        size:'Size: 1/0',
        price:'8€',
    },
    {
        _id:'6',
        name:'Bass Yellow',
        image:`${bass_yellow}`,
        description:'Popper camo jaune et orange pour la pêche du Black Bass',
        utilite:'Montés sur Hameçon Gamakatsu, ce petit popper vous permettera de traquer le Black Bass dans les endroits les plus encombrés',
        category:'Popper',
        countInStock:'10',
        size:'Size: 1/0',
        price:'8€',
    },
    {
        _id:'7',
        name:'Tiger Frog',
        image:`${tiger_frog}`,
        description:'Petite grenouille chartreuse et noir pour la pêche du Black Bass',
        utilite:'Montés sur Hameçon Gamakatsu, les couleurs agressives de cette petite grenouille ',
        category:'Popper',
        countInStock:'10',
        size:'Size: 3/0',
        price:'12€',
    },
    {
        _id:'8',
        name:'BB Bass',
        image:`${BB_bass}`,
        description:'Petit popper imitant un jeune Black Bass',
        utilite:'',
        category:'Popper',
        countInStock:'10',
        size:'Size: 3/0',
        price:'12€',
    },
    {
        _id:'9',
        name:'BB Pike',
        image:`${BB_pike}`,
        description:'Petit popper imitant un jeune Brochet',
        utilite:'',
        category:'Popper',
        countInStock:'10',
        size:'Size: 3/0',
        price:'12€',
    },
    {
        _id:'10',
        name:'Lizard',
        image:`${lizard}`,
        description:'Popper camo imitation de lézard',
        utilite:'',
        category:'Popper',
        countInStock:'10',
        size:'Size: 3/0',
        price:'10€',
    },
    {
        _id:'11',
        name:'Crazy Frog',
        image:`${crazy_frog}`,
        description:'Grosse grenouille qui pousse de l\'eau',
        category:'Popper',
        countInStock:'10',
        size:'Size: 5/0',
        price:'14€',
    },
    {
        _id:'12',
        name:'Big Pike',
        image:`${pike}`,
        description:'Gros popper pour pêcher les bordures',
        utilite:'',
        category:'Popper',
        countInStock:'10',
        size:'Size: 5/0',
        price:'13€',
    },
];
export default products;