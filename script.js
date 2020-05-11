
var img = null;
var mybr = null;
var mybr1 = null;
var mybr2 = null;

var signification = null;
var block = document.getElementById("kanji");
var listeKanji = [
['イチ, イツ','ひと, ひと.つ','un'],
['シチ','なな, なな.つ, なの','sept'],
[ "マン, バン","よろず","dix-mille"],
[ "サン, ゾウ", "み, み.つ, みっ.つ", "trois"],
[ "ジョウ, ショウ, シャン", "うえ, あ.げる, のぼ.る", "au-dessus, haut, monter, donner"],
[ "カ, ゲ", "した, さ.げる, くだ.る" ,"au-dessous, descendre, bas, donner,,inférieur"],
[ "チュウ", "なか, うち, あた.る", "dans, dedans, à l'intérieur, milieu, centre, moyenne" ],
[ "キュウ, ク", "ここの, ここの.つ", "neuf"],
[ "ニ, ジ", "ふた, ふた.つ, ふたた.び", "deux"],
[ "ゴ", "いつ, いつ.つ", "cinq"],
[ "ジン, ニン" ,"ひと", "être humain, personne"],
[ "コン", "いま", "maintenant"],
[ "キュウ", " やす.む, やす.める", " se reposer, repos"],
[ "カイ", " あ.う", " réunion, rencontre, parti"],
[ "カ", " なに, なん", " quoi, que"],
[ "セン", " さき, ま.ず", " avant, devant, précédent"],
[ "ニュウ, ジュ", " い.る, い.れる, はい.る", " entrer, insérer"],
[ "ハチ", " や, や.つ, やっ.つ, よう", " huit"],
[ "ロク, リク", " む ", "six"],
[ "エン", " まる.い ", "cercle, yen, rond"],
[ "シュツ, スイ", " で.る, だ.す, い.でる ", "sortir, quitter, présence"],
[ "ブン, フン ", "わ.ける, わ.かる ", "comprendre, minute, degré, taux"],
[ "ゼン ", "まえ ", "avant, devant"],
[ "ホク ", "きた ", "Nord"],
[ "ジュウ ", "とお, と", " dix"],
[ "セン", " ち", " mille"],
[ "ゴ", " うま", " midi"],
[ "ハン", " なか.ば", " moitié, milieu, demi"],
[ "ナン", " みなみ", " Sud"],
[ "ユウ", " とも", " ami"],
[ "コウ, ク", " くち", " bouche"],
[ "コ", " ふる.い", " vieux, ancien"],
["ウ, ユウ", " みぎ", " droite"],
[" メイ, ミョウ", " な", " nom, célèbre, fameux"],
[ "シ", " よ, よん", " quatre"],
[ "コク", " くに", " pays"],
[ "ド, ト", " つち", " sol, terre, terrain"],
[ "ガイ", " そと, はず.れ", " extérieur, dehors"],
[ "タ", " おお.い", " nombreux, beaucoup"],
[ "ダイ, タイ", " おお.きい", " grand"],
[ "テン", " あまつ, あめ", " cieux, ciel, impérial"],
[ "ジョ, ニョ, ニョウ", " おんな, め", " femme, féminin"],
[ "シ, ス, ツ", " こ", " enfant"],
[ "ガク", " まな.ぶ", " étudier, apprendre, science"],
[ "アン ", "やす.い", " bon marché, peu cher, sûr, tranquille"],
[ "ショウ", " ちい.さい, こ", " petit"],
[ "ショウ", " すく.ない, すこ.し", " un peu, peu de"],
[ "サン, セン", " やま", " montagne"],
[ "セン", " かわ", " rivière, fleuve"],
[ "サ, シャ", " ひだり", " gauche"],
[ "ネン", " とし", " année, compteur pour les années"],
[ "テン", " みせ", " magasin, échoppe"],
[ "ゴ, コウ", " のち, うし.ろ, あと, おく.れる", " après, derrière"],
[ "シュ", " て", " main"],
[ "シン", " あたら.しい", " nouveau, frais"],
[ "ニチ, ジツ", " ひ, か", " jour, soleil, Japon, compteur pour les jours"],
[ "ジ", " とき", " temps, heure"],
[ "ショ", " か.く", " écrire"],
[ "ゲツ, ガツ", " つき", " lune, mois"],
[ "モク", " き", " arbre, bois"],
[ "ホン", " もと", " livre, essentiel, réalité, compteur pour les objets allongés"],
[ "ライ", " く.る", " venir, suivant"],
[ "トウ", " ひがし", " Est"],
[ "コウ", " めん", " école"],
[ "ボ", " はは", " mère, maman"],
[ "マイ", " ごと", " chaque, tous les"],
[ "キ", " いき", " esprit, atmosphère, humeur"],
[ "スイ", " みず", " eau"],
[ "カ", " ひ", " feu"],
[ "フ", " ちち", " père, papa"],
[ "セイ, ショウ", " い.きる, う.まれる, なま", " vivre, naître, cru, authentique"],
[ "ダン, ナン", " おとこ", " homme, mâle"],
[ "ハク", " しろ.い", " blanc"],
[ "ヒャク, ビャク", " もも", " cent"],
[ "モク, ボク", " め", " œil, numérateur ordinal"],
[ "シャ", " やしろ", " entreprise, société, temple shinto"],
[ "クウ", " そら, あ.く, す.く", " ciel, creux, vide"],
[ "リツ", " た.つ", " être debout, établir"],
[ "ジ", " みみ", " oreille"],
[ "ブン, モン", " き.く, き.こえる", " entendre, écouter, demander"],
[ "カ", " はな", " fleur"],
[ "コウ, ギョウ", " い.く, ゆ.く, おこ.なう", " aller, voyage"],
[ "セイ", " にし", " Ouest"],
[ "ケン", " み.る, み.える, み.せる", " regarder, voir"],
[ "ゲン, ゴン", " い.う", " dire, parler"],
[ "ワ", " はな.す, はなし", " parler, histoire"],
[ "ゴ", " かた.る, かた.らう", " langage, mot, raconter"],
[ "ドク, トク", " よ.む", " lire"],
[ "バイ", " か.う", " acheter"],
[ "ソク", " あし, た.りる, た.す", " jambe, être suffisant, ajouter"],
[ "シャ", " くるま", " véhicule, voiture"],
[ "シュウ", " -", " semaine"],
[ "ドウ", " みち", " voie, route, chemin"],
[ "キン, コン", " かね", " or"],
[ "チョウ", " なが.い", " chef, long"],
[ "カン", " あいだ, ま", " intervalle"],
[ "ウ", " あめ", " pluie"],
[ "デン", " -", " électricité"],
[ "ショク", " た.べる", " manger, nourriture"],
[ "イン, オン", " の.む", " boire, boisson"],
[ "エキ", " -", " gare"],
[ "コウ", " たか.い", " haut, élevé, cher"],
[ "ギョ", " うお, さかな", " poisson"]
 ];
var lectureSino;
var lectureJap;

function kanji(){

var random = Math.floor(Math.random() * 103);   
console.log(listeKanji[random][2]);

img = document.createElement("img");
img.src = "image/kanji_"+(random+1)+".png";

signification = document.createElement("signification");
signification.appendChild(document.createTextNode("signification du kanji : "+ listeKanji[random][2]));
lectureJap = document.createElement("lectureJap");
lectureJap.appendChild(document.createTextNode("Lecture(s) japonaise(s) : "+ listeKanji[random][1]));
lectureSino = document.createElement("lectureSino");
lectureSino.appendChild(document.createTextNode("Lecture(s) Sino-japonaise(s) : " +listeKanji[random][0]));

mybr = document.createElement('br');
mybr1 = document.createElement('br');
mybr2 = document.createElement('br');

console.log(signification);

block.appendChild(img);
block.appendChild(mybr);
block.appendChild(signification);
block.appendChild(mybr1);
block.appendChild(lectureJap);
block.appendChild(mybr2);
block.appendChild(lectureSino);

setTimeout(delKanji, 9000); }

function delKanji(){
    
    block.removeChild(img);
    block.removeChild(mybr);
    block.removeChild(signification);
    block.removeChild(mybr1);
    block.removeChild(lectureJap);
    block.removeChild(mybr2);
    block.removeChild(lectureSino);
    

    img = null;
    mybr = null;
    signification = null;

    console.log(signification);
}
function run(){

    setInterval(kanji,10000)
}


run();