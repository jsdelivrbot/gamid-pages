export const title = "hasBorderCollision"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/physics"}
                    ]

export const content =
`
hasBorderCollision é um dos atributos que controla as físicas do Objeto. Ao ser setado como true,
o objeto recebe física e o evento de afterBorderCollision, podendo colidir com a borda.
Caso false, o objeto se torna "fantasma" com relação à borda,
mas ainda recebe eventos de beforeBorderCollision.
`

export const example =
`
let canvasInstance = new gamid.graphics.Canvas(800, 800, 'purple');
let canvas = canvasInstance.element;

// Cria um objeto do tipo quadrado com seus respectivos atributos.
// Width, height, posição no eixo X, posição no eixo Y, massa e cor, respectivamente.
let square = new gamid.graphics.Square(50, 50, 0, 0, 50, 'blue');

// Adiciona a física de colisão de quadrado para o objeto criado anteriormente.
let squarecollision = new gamid.physics.SquareCollision(square);

//Objeto fantasma!
squarecollision.hasBorderCollision = false; // É true como padrão!
`
