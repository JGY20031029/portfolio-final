<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "<h2>您的修課紀錄資料：</h2>";
    echo "姓名: " . $_POST["name"] . "<br>";
    echo "密碼: " . $_POST["password"] . "<br>";
    echo "出生日期: " . $_POST["birthdate"] . "<br>";
    echo "電子郵件: " . $_POST["email"] . "<br>";
    echo "學號: " . $_POST["student_id"] . "<br>";
    echo "年級: ";
    switch ($_POST["grade"]) {
        case 1:
            echo "一年級";
            break;
        case 2:
            echo "二年級";
            break;
        case 3:
            echo "三年級";
            break;
        case 4:
            echo "四年級";
            break;
        default:
            echo "未選擇";
            break;
    }
    echo "<br>";
    echo "修課清單: ";
    if (!empty($_POST["courses"])) {
        echo implode(", ", $_POST["courses"]);
    } else {
        echo "未選擇";
    }
    exit(); 
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>個人修課紀錄</title>
</head>
<body>
    <h2>個人修課紀錄</h2>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="name">姓名:</label><br>
        <input type="text" id="name" name="name"><br><br>

        <label for="password">密碼:</label><br>
        <input type="password" id="password" name="password"><br><br>

        <label for="birthdate">出生日期:</label><br>
        <input type="date" id="birthdate" name="birthdate"><br><br>

        <label for="email">電子郵件:</label><br>
        <input type="email" id="email" name="email"><br><br>

        <label for="student_id">學號:</label><br>
        <input type="text" id="student_id" name="student_id"><br><br>

        <label for="grade">年級:</label><br>
        <select id="grade" name="grade">
            <option value="1">一年級</option>
            <option value="2">二年級</option>
            <option value="3">三年級</option>
            <option value="4">四年級</option>
        </select><br><br>

        <label for="courses">修課清單:</label><br>
        <input type="checkbox" id="course1" name="courses[]" value="Math">
        <label for="course1">數學</label><br>
        <input type="checkbox" id="course2" name="courses[]" value="Science">
        <label for="course2">科學</label><br>
        <input type="checkbox" id="course3" name="courses[]" value="History">
        <label for="course3">歷史</label><br><br>

        <input type="submit" name="submit" value="送出">
        <input type="reset" value="重設">
    </form>
</body>
</html>