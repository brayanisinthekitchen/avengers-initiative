window.addEventListener('load',function(){
    figure = document.getElementById('multiSlide');
    topButton       = document.getElementById('top');
    bottomButton    = document.getElementById('bottom');
    leftButton      = document.getElementById('left');
    rightButton     = document.getElementById('right'); 
    
    new Box(-2,2,'https://1.bp.blogspot.com/-z7jketJFwCk/XrDay0KSVWI/AAAAAAAABa4/IF9TVxq1YR4Kr5EPox_FW4-3JuGOJdzzQCLcBGAsYHQ/s1600/Iron_Man_1_Portada.png');
    new Box(-1,2,'https://vignette.wikia.nocookie.net/marveldatabase/images/e/ed/Iron_Man_2_poster.jpg/revision/latest?cb=20190309193419');
    new Box(0,2,'http://m3.nguonphim.net/media/images/film/newcover/2017/7/s1000_1000/captain-america-the-first-avenger-review-1500281319.jpg');
    new Box(1,2,'https://vignette.wikia.nocookie.net/greatest-movies/images/d/d1/810AwpOyZfL._RI_.jpg/revision/latest?cb=20190625144400');
    new Box(2,2,'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mfjJLZK9JvflsKM3gVMnX7QJzKJ.jpg');
    new Box(3,2,'https://media.movieassets.com/static/images/items/movies/posters/fde92d9cd1b8c4de6370d9bbce339918.jpg');
    new Box(4,2,'https://i0.wp.com/www.regarder-films.net/wp-content/uploads/2020/03/iron-man-3-scaled.jpg');
    new Box(5,2,'http://fr.web.img4.acsta.net/r_1280_720/pictures/210/366/21036684_20130906171612077.jpg');
    new Box(2,-2,'https://www.newdvdreleasedates.com/images/posters/large/captain-america-the-winter-soldier-2014-10.jpg');
    new Box(2,-1,'http://fr.web.img5.acsta.net/pictures/14/08/04/15/09/405662.jpg');
    new Box(2,0,'https://3238leblogdemarvelll-1278.kxcdn.com/wp-content/uploads/2017/03/guardians-of-the-galaxy-vol-2-poster-final.jpg');
    new Box(2,1,'https://media.senscritique.com/media/000009596608/source_big/Avengers_L_Ere_d_Ultron.jpg');
    new Box(2,2,'https://www.film-rezensionen.de/wp-content/uploads/2015/07/Ant-Man.jpg');
    new Box(2,3,'https://www.totf.nl/wp-content/uploads/2016/05/5N20rQURev5CNDcMjHVUZhpoCNC.jpg');
    new Box(2,4,'https://media.senscritique.com/media/000018616764/source_big/Spider_Man_Homecoming.jpg');
    new Box(2,5,'https://fr.web.img2.acsta.net/pictures/17/10/13/16/58/5844466.jpg');
    
    topButton.addEventListener('click', function(){
        if(slidePosY>-3)
            slide('Y',-1);
    });
    bottomButton.addEventListener('click', function(){
        if(slidePosY<4)
            slide('Y',1);
    });
    leftButton.addEventListener('click', function(){
        if(slidePosX>-3)
            slide('X',-1);
    });
    rightButton.addEventListener('click', function(){
        if(slidePosX<4)
            slide('X',1);
    });
});

var unit            = 160;
var registeredBoxes = [];
var slidePosX       = 0;
var slidePosY       = 0;
var Box = function(posX,posY,img){
    this.pos    = {};
    this.pos.X  = posX;
    this.pos.Y  = posY;
    this.img    = img;
    this.init();
}
Box.prototype = {
    init : function(){
        this.DOMElement             = document.createElement('div');
        this.DOMElement.className   = 'box';
        this.DOMElement.style.left  = (this.pos.X*unit)-unit+'px';
        this.DOMElement.style.top   = (this.pos.Y*unit)-unit+'px';
        this.DOMElement.setAttribute('data-pos',this.pos.X.toString()+this.pos.Y.toString());
        
        var img = document.createElement('img');
        img.src = this.img;
        
        this.DOMElement.appendChild(img);
        figure.appendChild(this.DOMElement);
        registeredBoxes.push(this);
    },
    setPosition : function(axis,val){
        this.pos[axis] = val;
        if(axis == 'X'){
            this.DOMElement.style.left  = (this.pos[axis]*unit)-unit+'px';
        }else if(axis == 'Y'){
            this.DOMElement.style.top   = (this.pos[axis]*unit)-unit+'px';
        }
        this.DOMElement.setAttribute('data-pos',this.pos.X.toString()+this.pos.Y.toString());
    }
}

function slide(axis,dir){
    var len = registeredBoxes.length;
    
    if(axis == 'Y'){
        for(var i=0; i<len; i++){
            if(registeredBoxes[i].pos['X']=='2'){
                registeredBoxes[i].setPosition(axis,registeredBoxes[i].pos['Y']+(1*dir));
            }
        }
        slidePosY = slidePosY+dir;
    }else if(axis == 'X'){
        for(var i=0; i<len; i++){
            if(registeredBoxes[i].pos['Y']=='2'){
                registeredBoxes[i].setPosition(axis,registeredBoxes[i].pos['X']+(1*dir));
            }
        }
        slidePosX = slidePosX+dir;
    }
}