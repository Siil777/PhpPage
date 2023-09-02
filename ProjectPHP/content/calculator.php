<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS katsed</title>

</head>
<body onload="randompic()">
<h1>Harjutus 1</h1>

<img src="" id="random-img" alt="pilt">

<br>
<label for="valik5"> Mis on pildil</label>
<select id="valik5" onchange="imgChoice()">
    <option>..vali..</option>
    <option value="img/mees.png">mees</option>
    <option value="img/naine.png">naine</option>
    <option value="img/Valimata">Valimata</option>
</select>
<br>
<div id="vastus2"></div>
<h1>Harjutus 2. Sisesta kogus ja vali valuuta</h1>
<form name="var1" id="var1" >







    <table border="1" width="50%">

        <caption>Valuuta kalkulaator</caption>
        <!--1rida-->
        <tr>

            <td>
                <input type="radio" name="valute" id="dollar" value="dollar" onchange="radioChange(event)">
                <label for="dollar">dollar</label>
                <br>
                <input type="radio" name="valute" id="rub" value="rub" onchange="radioChange(event)">
                <label for="rub">rub</label>
                <br>
                <input type="radio" name="valute" id="sek" value="sek" onchange="radioChange(event)">
                <label for="sek">kroon</label>
                <br>
                <input type="radio" name="valute" id="frank" value="frank" onchange="radioChange(event)">
                <label for="frank">frank</label>
            </td>
            <td>

                <label for="valik"> Vali valuuta</label>
                <select id="valik" onchange="selectOptionChange(event)">
                    <option>..vali..</option>
                    <option value="dollar">dollar</option>
                    <option value="rub">rub</option>
                    <option value="kroon">kroon</option>
                    <option value="frank">frank</option>
                </select>



            </td>




            <td>
                <label for="input">Sisesta:</label>
                <div class="my-class">
                    <input type="text" id="input" name="input" oninput="radioChange1()">
                </div>
                <ul>
                    <li>USD</li>
                    <li>RUB</li>
                    <li>KROON</li>
                    <li>FRANK</li>
                </ul>
            </td>
            <td>
                <div id="checkboxes">
                    <label><input type="checkbox" name="currency" value="USD" onchange="checkboxChange1()"> USD</label>
                    <br>
                    <label><input type="checkbox" name="currency" value="RUB" onchange="checkboxChange1()"> RUB</label>
                    <br>
                    <label><input type="checkbox" name="currency" value="KROON" onchange="checkboxChange1()"> KROON</label>
                    <br>
                    <label><input type="checkbox" name="currency" value="FRANK" onchange="checkboxChange1()"> FRANK</label>
                </div>














            </td>

        </tr>

        <!--2rida-->
        <tr><!--ühendab-->
            <td colspan="4">
                <label for="kogus"> Kogus: </label>
                <input type="number" id="kogus" name="kogus" >
                <div id="vastus"></div>
                <input type="button" value="OK" onclick="validateForm()">
                <input type="reset" value="Reset" onclick="vanish()">
            </td>
        </tr>


    </table>
</form>
</body>
</html>