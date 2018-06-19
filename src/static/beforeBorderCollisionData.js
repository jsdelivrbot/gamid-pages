export const title = "beforeBorderCollision()"
export const links = [
                    {title:"Retornar", link:"/gamid-pages/physics"}
                    ]

export const content =
`
Essa função é ativada após um dado objeto colidir com a borda. É ativado apenas quando hasBorderCollision
está setado como false.
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

squarecollision.hasBorderCollision = false; //É true como padrão!

// Como parâmetro padrão, essa função recebe o próprio objeto
// atribuido à squarecollision.
squarecollision.afterBorderCollision = function(object){
    // Deleta o objeto ao colidir com a borda!
    canvasInstance.deleteObject(object);
}

`
