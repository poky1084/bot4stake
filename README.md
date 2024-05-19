# bot4stake  <br /> 
a javascript coded bot for Stake, Primedice, copy-paste in the console. (Dice, Limbo, Crash, Slide)

# Videos: <br /> 
Install: https://www.youtube.com/watch?v=pdF74AwKwvw <br />
Slide: https://www.youtube.com/watch?v=nzvLC4HyG44 <br />

# Info: <br />
Please favourite the repo in case you liked/used it. Thank you!

<b>Discord</b>: fisk_992 <br />
<b>Stake</b>: poky1084 <br />
<b>Telegram:</b>: @poky_1084


# Use: <br />

<b>Plinko: </b>
```game = "plinko"
rows = 8
risk = "low" ```

<b>Keno:</b>
```game = "keno"
numbers = [1,2,3,4,5,6,7,8]
risk = "low" ```

<b>Mines:</b>
```game = "mines"
fields = [1,2,3,4,5,6,7,8]
mines = 3 ```

<b>Limbo:</b>
```game = "limbo"
chance = 49.5
nextbet = 0 ```

<b>Dice:</b>
```game = "dice"
chance = 49.5
nextbet = 0
bethigh = false
 ```
<b>Crash:</b>
```
target = 1.5
chance = 99 / target
nextbet = 0 ```

<b>Slide:</b>
```
nextbet = 0.01
target = 1.5
chance = 99 / target

makebet(nextbet, chance, "identifier01")
makebet(nextbet, chance, "identifier02")
makebet(nextbet, chance, "identifier03")
```

