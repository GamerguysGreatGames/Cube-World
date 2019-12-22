var playing=false
var rng2=0;
var enemy1;
var enemy2;
var enemy3;
var mininglvl=0;
var armor=0;
var ores=0;
var strength=1;
var sticks=0;
var w=50
var wy=50
var rng1=0;
var loops=0;
var rng=0;
var count=1;
var corex=400;
var corey=400;
var offrames=0
var img;
var wood
var swap;
var bricks;
var player;
var brick=0;
var logs=20
var crafting_menu=false;
var hotbar1=0;
var hotbar2=0;
var hotbar3=0;
var hotbar4=0;
var hotbar5=0;
var hotbar6=0;
var blue_wool_number=0;
var red_wool_number=0;
var green_wool_number=10;
var stone_number=0;
var once=0;
function setup(){
frameRate(60)
createCanvas(800,800)
leaves=createGroup()
loot=createGroup()
bricks=createGroup()
wood=createGroup()
blue_wool=createGroup()
red_wool=createGroup()
green_wool=createGroup()
stone=createGroup()
player=createSprite(200,200,50,50)
img=loadImage("player.png")
player.addImage(img)
hotbar1=createSprite(50,750,20,20)
img=loadImage("brick.png")
hotbar1.addImage(img)
hotbar2=createSprite(80,750,20,20)
img=loadImage("wood.png")
hotbar2.addImage(img)
hotbar3=createSprite(110,750,20,20)
img=loadImage("blue_wool.png")
hotbar3.addImage(img)
hotbar4=createSprite(140,750,20,20)
img=loadImage("red_wool.png")
hotbar4.addImage(img)
hotbar5=createSprite(170,750,20,20)
img=loadImage("green_wool.png")
hotbar5.addImage(img);
hotbar6=createSprite(200,750,20,20)
img=loadImage("stone.png")
hotbar6.addImage(img)
corex=random(100,700)
corey=random(100,700)
rng=random(1,18)
rng=Math.round(rng)
while(loops<10){
if (rng==5){
while(count<5){
corex=corex+random(-100,100)
corey=corey+random(-100,100)
swap=createSprite(corex,corey,50,50)
img=loadImage("wood.png")
swap.addImage(img)
wood.add(swap)
swap=createSprite(corex,corey-15,50,50)
img=loadImage("wood.png")
swap.addImage(img)
wood.add(swap)
swap=createSprite(corex,corey-30,50,50)
img=loadImage("wood.png")
swap.addImage(img)
wood.add(swap)
swap=createSprite(corex,corey-45,50,50)
img=loadImage("leaf.png")
swap.addImage(img)
leaves.add(swap)
swap=createSprite(corex-15,corey-30,50,50)
img=loadImage("leaf.png")
swap.addImage(img)
leaves.add(swap)
swap=createSprite(corex+15,corey-30,50,50)
img=loadImage("leaf.png")
swap.addImage(img)
leaves.add(swap)
count++;
}}
if (rng==4){
while(count<25){
swap=createSprite(corex,corey,50,50)
img=loadImage("brick.png")
swap.addImage(img)
bricks.add(swap)
count++;
if(count<4){
if (count==3){
swap=createSprite(corex-15,corey+30,50,50);}else{
swap=createSprite(corex,corey+30,50,50);}
img=loadImage("brick.png")
swap.addImage(img)
bricks.add(swap)}
if(count<8){
corex=corex+15;}
if (count<5){
corey=corey-15;}else{if (count<12){corey=corey+15}else{if (count<=17){corex=corex-15;
if (count>16){
if (once==0){swap=createSprite(corex+45,corey-40,50,50);
img=loadImage("lootbox.png")
swap.addImage(img)
loot.add(swap);
once=1}}}}}
}}
if (rng==3){
while(count<25){
rng1=random(1,2)
rng1=Math.round(rng1)
swap=createSprite(corex,corey,50,50)
if (rng1==1){img=loadImage("red_wool.png")}else{img=loadImage("blue_wool.png")}
swap.addImage(img)
if (rng1==1){red_wool.add(swap)}else{blue_wool.add(swap)}
count++;
if(count<4){
if (count==3){
swap=createSprite(corex-15,corey+30,50,50);}else{
swap=createSprite(corex,corey+30,50,50);}
if (rng1==1){img=loadImage("red_wool.png")}else{img=loadImage("blue_wool.png")}
swap.addImage(img)
if (rng1==1){red_wool.add(swap)}else{blue_wool.add(swap)}}
if(count<8){
corex=corex+15;}
if (count<5){
corey=corey-15;}else{if (count<12){corey=corey+15}else{if (count<=17){corex=corex-15;
if (count>16){
if (once==0){swap=createSprite(corex+45,corey-40,50,50);
img=loadImage("lootbox.png")
swap.addImage(img)
loot.add(swap);
once=1}}}}}
}}
if (rng==2){
while(count<15){
if (count<3){corey=corey+15;}
if (count>3){if(count<6){corex=corex+15;}}
if (count>6){if(count<9){corey=corey-15;}}
if (count>9){if(count<12){corex=corex-15;}}
if(count==12){swap=createSprite(corex+15,corey+15,50,50);
img=loadImage("lootbox.png")
swap.addImage(img)
loot.add(swap);}
swap=createSprite(corex,corey,50,50)
img=loadImage("stone.png")
swap.addImage(img)
stone.add(swap)
count++;}
}
if (rng==1){
while(count<25){
swap=createSprite(corex,corey,50,50)
img=loadImage("wood.png")
swap.addImage(img)
wood.add(swap)
count++;
if(count<4){
if (count==3){
swap=createSprite(corex-15,corey+30,50,50);}else{
swap=createSprite(corex,corey+30,50,50);}
img=loadImage("wood.png")
swap.addImage(img)
wood.add(swap)}
if(count<8){
corex=corex+15;}
if (count<5){
corey=corey-15;}else{if (count<12){corey=corey+15}else{if (count<=17){corex=corex-15;
if (count>16){
if (once==0){swap=createSprite(corex+45,corey-40,50,50);
img=loadImage("lootbox.png")
swap.addImage(img)
loot.add(swap);
once=1}}}}}
}}
corex=random(100,700)
corey=random(100,700)
rng=random(1,20)
rng=Math.round(rng)
count=1;
once=0;
loops++;
}
}
function draw(){
background("green")
  if (playing==true){
text(rng,50,50)
hittest()
drawSprites();
if (crafting_menu==false){
hotbar();
play();}else{
crafting_screen();
}frameRate(30)}
else{
textAlign(CENTER)
fill("black")
textSize(30)
text("Cube World",400,50)
if(keyDown("p")){playing=true;}
}}
function play(){
rng2=random(0,100)
if (rng2<10){}
if(keyDown("UP_ARROW")){player.y=player.y-6;}
if(keyDown("LEFT_ARROW")){player.x=player.x-6;}
if(keyDown("DOWN_ARROW")){player.y=player.y+6;}
if(keyDown("RIGHT_ARROW")){player.x=player.x+6}
if(offrames==0){offrames=1}else{
offframes=0;
if (keyDown("e")){
if (mininglvl>2){
player.displace(bricks,playerHitBrick)}
if (mininglvl>1){
player.displace(stone,playerHitstone)}
player.displace(wood,playerHitWood)
player.displace(leaves,playerHitsLeaves)
player.displace(red_wool,playerHitred_wool)
player.displace(green_wool,playerHitgreen_wool)
player.displace(blue_wool,playerHitblue_wool)
}
}
if (keyDown("i")){crafting_menu=true;}
if (keyDown("a")){
if (brick>0){
if (keyDown("LEFT_ARROW")){
img=loadImage("brick.png")
swap=createSprite(player.x-20,player.y,50,50)
swap.addImage(img)
if (bricks.isTouching(bricks)){swap.destroy();bricks.displace(bricks,brickHit)}else{
bricks.add(swap)
brick--;
}}
if (keyDown("RIGHT_ARROW")){
img=loadImage("brick.png")
swap=createSprite(player.x+20,player.y,50,50)
swap.addImage(img)
if (bricks.isTouching(bricks)){swap.destroy();bricks.displace(bricks,brickHit)}else{
bricks.add(swap)
brick--;
}}
if (keyDown("UP_ARROW")){
img=loadImage("brick.png")
swap=createSprite(player.x,player.y-20,50,50)
swap.addImage(img)
if (bricks.isTouching(bricks)){swap.destroy();bricks.displace(bricks,brickHit)}else{
bricks.add(swap)
brick--;
}}
if (keyDown("DOWN_ARROW")){
img=loadImage("brick.png")
swap=createSprite(player.x,player.y+20,50,50)
swap.addImage(img)
if (bricks.isTouching(bricks)){swap.destroy();bricks.displace(bricks,brickHit)}else{
bricks.add(swap)
brick--;
}}}}
if (keyDown("s")){
if (logs>0){
if (keyDown("LEFT_ARROW")){
img=loadImage("wood.png")
swap=createSprite(player.x-20,player.y,50,50)
swap.addImage(img)
if (wood.isTouching(wood)){swap.destroy();wood.displace(wood,woodHit)}else{
wood.add(swap)
logs--;
}}
if (keyDown("RIGHT_ARROW")){
img=loadImage("wood.png")
swap=createSprite(player.x+20,player.y,50,50)
swap.addImage(img)
if (wood.isTouching(wood)){swap.destroy();wood.displace(wood,woodHit)}else{
wood.add(swap)
logs--;
}}
if (keyDown("UP_ARROW")){
img=loadImage("wood.png")
swap=createSprite(player.x,player.y-20,50,50)
swap.addImage(img)
if (wood.isTouching(wood)){swap.destroy();wood.displace(wood,woodHit)}else{
wood.add(swap)
logs--;
}}
if (keyDown("DOWN_ARROW")){
img=loadImage("wood.png")
swap=createSprite(player.x,player.y+20,50,50)
swap.addImage(img)
if (wood.isTouching(wood)){swap.destroy();wood.displace(wood,woodHit)}else{
wood.add(swap)
logs--;
}}}}
if (keyDown("d")){
if (blue_wool_number>0){
if (keyDown("LEFT_ARROW")){
img=loadImage("blue_wool.png")
swap=createSprite(player.x-20,player.y,50,50)
swap.addImage(img)
if (blue_wool.isTouching(blue_wool)){swap.destroy();blue_wool.displace(blue_wool,blue_woolHit)}else{
blue_wool.add(swap)
blue_wool_number--;
}}
if (keyDown("RIGHT_ARROW")){
img=loadImage("blue_wool.png")
swap=createSprite(player.x+20,player.y,50,50)
swap.addImage(img)
if (blue_wool.isTouching(blue_wool)){swap.destroy();blue_wool.displace(blue_wool,blue_woolHit)}else{
blue_wool.add(swap)
blue_wool_number--;
}}
if (keyDown("UP_ARROW")){
img=loadImage("blue_wool.png")
swap=createSprite(player.x,player.y-20,50,50)
swap.addImage(img)
if (blue_wool.isTouching(blue_wool)){swap.destroy();blue_wool.displace(blue_wool,blue_woolHit)}else{
blue_wool.add(swap)
blue_wool_number--;
}}
if (keyDown("DOWN_ARROW")){
img=loadImage("blue_wool.png")
swap=createSprite(player.x,player.y+20,50,50)
swap.addImage(img)
if (blue_wool.isTouching(blue_wool)){swap.destroy();blue_wool.displace(blue_wool,blue_woolHit)}else{
blue_wool.add(swap)
blue_wool_number--;
}}}}
if (keyDown("f")){
if (red_wool_number>0){
if (keyDown("LEFT_ARROW")){
img=loadImage("red_wool.png")
swap=createSprite(player.x-20,player.y,50,50)
swap.addImage(img)
if (red_wool.isTouching(red_wool)){swap.destroy();red_wool.displace(red_wool,red_woolHit)}else{
red_wool.add(swap)
red_wool_number--;
}}
if (keyDown("RIGHT_ARROW")){
img=loadImage("red_wool.png")
swap=createSprite(player.x+20,player.y,50,50)
swap.addImage(img)
if (red_wool.isTouching(red_wool)){swap.destroy();red_wool.displace(red_wool,red_woolHit)}else{
red_wool.add(swap)
red_wool_number--;
}}
if (keyDown("UP_ARROW")){
img=loadImage("red_wool.png")
swap=createSprite(player.x,player.y-20,50,50)
swap.addImage(img)
if (blue_wool.isTouching(blue_wool)){swap.destroy();red_wool.displace(red_wool,red_woolHit)}else{
red_wool.add(swap)
red_wool_number--;
}}
if (keyDown("DOWN_ARROW")){
img=loadImage("red_wool.png")
swap=createSprite(player.x,player.y+20,50,50)
swap.addImage(img)
if (red_wool.isTouching(red_wool)){swap.destroy();red_wool.displace(red_wool,red_woolHit)}else{
red_wool.add(swap)
red_wool_number--;
}}}}
if (keyDown("g")){
if (green_wool_number>0){
if (keyDown("LEFT_ARROW")){
img=loadImage("green_wool.png")
swap=createSprite(player.x-20,player.y,50,50)
swap.addImage(img)
if (green_wool.isTouching(green_wool)){swap.destroy();green_wool.displace(green_wool,green_woolHit)}else{
green_wool.add(swap)
green_wool_number--;
}}
if (keyDown("RIGHT_ARROW")){
img=loadImage("green_wool.png")
swap=createSprite(player.x+20,player.y,50,50)
swap.addImage(img)
if (green_wool.isTouching(green_wool)){swap.destroy();green_wool.displace(green_wool,green_woolHit)}else{
green_wool.add(swap)
green_wool_number--;
}}
if (keyDown("UP_ARROW")){
img=loadImage("green_wool.png")
swap=createSprite(player.x,player.y-20,50,50)
swap.addImage(img)
if (green_wool.isTouching(green_wool)){swap.destroy();green_wool.displace(green_wool,green_woolHit)}else{
green_wool.add(swap)
green_wool_number--;
}}
if (keyDown("DOWN_ARROW")){
img=loadImage("green_wool.png")
swap=createSprite(player.x,player.y+20,50,50)
swap.addImage(img)
if (green_wool.isTouching(green_wool)){swap.destroy();green_wool.displace(green_wool,green_woolHit)}else{
green_wool.add(swap)
green_wool_number--;
}}}}
if (keyDown("r")){
if (stone_number>0){
if (keyDown("LEFT_ARROW")){
img=loadImage("stone.png")
swap=createSprite(player.x-20,player.y,50,50)
swap.addImage(img)
if (stone.isTouching(stone)){swap.destroy();stone.displace(stone,stoneHit)}else{
stone.add(swap)
stone_number--;
}}
if (keyDown("RIGHT_ARROW")){
img=loadImage("stone.png")
swap=createSprite(player.x+20,player.y,50,50)
swap.addImage(img)
if (stone.isTouching(stone)){swap.destroy();stone.displace(stone,stoneHit)}else{
stone.add(swap)
stone_number--;
}}
if (keyDown("UP_ARROW")){
img=loadImage("stone.png")
swap=createSprite(player.x,player.y-20,50,50)
swap.addImage(img)
if (stone.isTouching(stone)){swap.destroy();stone.displace(stone,stoneHit)}else{
stone.add(swap)
stone_number--;
}}
if (keyDown("DOWN_ARROW")){
img=loadImage("stone.png")
swap=createSprite(player.x,player.y+20,50,50)
swap.addImage(img)
if (stone.isTouching(stone)){swap.destroy();stone.displace(stone,stoneHit)}else{
stone.add(swap)
stone_number--;
}}}}
}
function brickHit(bricks,bricks) {
bricks.destroy();
brick++;
}
function stoneHit(stone,stone) {
stone.destroy();
stone_number++;
}
function blue_woolHit(blue_wool,blue_wool) {
blue_wool.destroy();
blue_wool_number++;
}
function red_woolHit(red_wool,red_wool) {
red_wool.destroy();
red_wool_number++;
}
function green_woolHit(green,green_wool) {
green_wool.destroy();
green_wool_number++;
}
function woodHit(wood,wood) {
wood.destroy();
logs++;
}
function stoneHit(stone,stone) {
stone.destroy();
stone_number++;
}
function leaveHit(leaves,leaves) {
leaves.destroy();
}
function playerHitBrick(player,bricks) {
  bricks.remove();
  brick++;
}
function looting(player,loot) {
loot.remove();
let rngspace=random(1,15);
let rngtakeaway=random(1,12);
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
blue_wool_number=blue_wool_number+rngspace;
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
red_wool_number=red_wool_number+rngspace;
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
green_wool_number=blue_wool_number+rngspace;
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
stone_number=stone_number+rngspace;
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
logs=logs+rngspace
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
brick=brick+rngspace
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
sticks=sticks+rngspace
rngspace=random(1,rngspace)
rngtakeaway=random(1,rngspace)
rngspace=rngspace-rngtakeaway/10;
rngtakeaway=round(rngtakeaway)
rngspace=round(rngspace)
ores=ores+rngspace
}
function playerHitWood(player,wood) {
  wood.remove();
  logs++;
}
function playerHitsLeaves(player,leaves) {
  leaves.remove();
}
function playerHitstone(player,stone) {
  stone.remove();
  stone_number++;
}
function playerHitred_wool(player,red_wool) {
  red_wool.remove();
  red_wool_number++;
}
function playerHitblue_wool(player,blue_wool) {
  blue_wool.remove();
  blue_wool_number++;
}
function playerHitgreen_wool(player,green_wool) {
  green_wool.remove();
  green_wool_number++;
}
function playerHitstone(player,stone) {
  stone.remove()
  stone_number++;
}
function hotbar(){
hotbar1.scale=2
hotbar2.scale=2
hotbar3.scale=2
hotbar4.scale=2
hotbar5.scale=2
hotbar6.scale=2
textAlign(CENTER)
fill("black")
text(brick,50,760)
textAlign(CENTER)
fill("black")
text(logs,80,760)
textAlign(CENTER)
fill("black")
text(blue_wool_number,110,760)
textAlign(CENTER)
fill("black")
text(red_wool_number,140,760)
textAlign(CENTER)
fill("black")
text(green_wool_number,170,760)
textAlign(CENTER)
fill("black")
text(stone_number,200,760)
}
function hittest(){
bricks.displace(bricks,brickHit)
wood.displace(wood,woodHit)
blue_wool.displace(blue_wool,blue_woolHit)
red_wool.displace(red_wool,red_woolHit)
green_wool.displace(green_wool,green_woolHit)
stone.displace(stone,stoneHit)
leaves.displace(leaves,leaveHit)
bricks.displace(player)
wood.displace(player)
blue_wool.displace(player)
red_wool.displace(player)
green_wool.displace(player)
player.displace(loot,looting)
leaves.displace(player)
stone.displace(player)
stone.displace(loot)
stone.displace(leaves)
bricks.displace(wood);
bricks.displace(blue_wool)
bricks.displace(red_wool)
bricks.displace(green_wool)
bricks.displace(stone)
bricks.displace(loot)
bricks.displace(leaves)
wood.displace(bricks);
wood.displace(blue_wool);
wood.displace(red_wool);
wood.displace(green_wool);
wood.displace(stone);
wood.displace(loot);
wood.displace(leaves);
blue_wool.displace(bricks);
blue_wool.displace(wood);
blue_wool.displace(red_wool);
blue_wool.displace(green_wool);
blue_wool.displace(stone);
blue_wool.displace(loot);
blue_wool.displace(leaves);
red_wool.displace(bricks);
red_wool.displace(wood);
red_wool.displace(blue_wool);
red_wool.displace(green_wool);
red_wool.displace(stone);
red_wool.displace(loot);
red_wool.displace(leaves);
green_wool.displace(bricks);
green_wool.displace(wood);
green_wool.displace(blue_wool);
green_wool.displace(red_wool);
green_wool.displace(stone);
green_wool.displace(loot);
green_wool.displace(leaves);
stone.displace(bricks);
stone.displace(wood);
stone.displace(blue_wool);
stone.displace(red_wool);
stone.displace(green_wool)
stone.displace(loot);
stone.displace(leaves);
}
function crafting_screen(){
hotbar1.visible=false
hotbar2.visible=false
hotbar3.visible=false
hotbar4.visible=false
hotbar5.visible=false
hotbar6.visible=false
stone.setVisibleEach(false)
wood.setVisibleEach(false)
bricks.setVisibleEach(false)
blue_wool.setVisibleEach(false)
green_wool.setVisibleEach(false)
red_wool.setVisibleEach(false)
leaves.setVisibleEach(false)
loot.setVisibleEach(false)
player.visible=false
fill("black")
textSize(30)
textAlign(LEFT)
text("(1)Sticks: "+sticks,50,50)
text("Crafting Cost:Wood x2",50,100)
text("Current Number:"+sticks,50,150)
text("(2)Sword Level: "+strength,50,250)
text("Sword Level Up Cost:Sticks x2,Wood,Stone,or Ores x2",0,300)
text("(3)Armor Level: "+armor,50,350)
text("Armor Level Up Cost:Ore x 5",50,400)
text("(4)Pickaxe Level: "+mininglvl,50,450)
text("Pickaxe Level Up Cost:Wood,Stone,or Ores x2",50,500)
textAlign(RIGHT)
text("Wood:"+logs,750,50)
text("Stone:"+stone_number,750,100)
text("Ores:"+ores,750,150)
if(keyDown("e")){
crafting_menu=false;
hotbar1.visible=true
hotbar2.visible=true
hotbar3.visible=true
hotbar4.visible=true
hotbar5.visible=true
hotbar6.visible=true
stone.setVisibleEach(true)
wood.setVisibleEach(true)
bricks.setVisibleEach(true)
blue_wool.setVisibleEach(true)
green_wool.setVisibleEach(true)
red_wool.setVisibleEach(true)
leaves.setVisibleEach(true)
loot.setVisibleEach(true)
player.visible=true}
if(keyDown("1")){if (logs>=2){sticks=sticks+2;logs=logs-2}}
if(keyDown("2")){if(strength==1){if (logs>=1){if (sticks>=2){sticks=sticks-2;logs=logs-2;strength=strength+1;}}}
if(strength==2){if (stone_number>=1){if (sticks>=2){sticks=sticks-2;stone_number=stone_number-2;strength=strength+1;}}}
if(strength==3){if (ores>=1){if (sticks>=2){sticks=sticks-2;ores=ores-2;strength=strength+1;}}}
}
if(keyDown("3")){if (ores>=2){ores=ores-2;armor=armor+1;}}
if(keyDown("4")){
if(strength==1){if (logs>=3){if (sticks>=2){sticks=sticks-2;logs=logs-2;mininglvl=mininglvl+1;}}}
if(strength==2){if (stone_number>=3){if (sticks>=2){sticks=sticks-2;stone_number=stone_number-2;mininglvl=mininglvl+1;}}}
if(strength==3){if (ores>=3){if (sticks>=2){sticks=sticks-2;ores=ores-2;mininglvl=mininglvl+1;}}}
}
}