
var exec = require("child_process").exec;
function login (req, res) {

    function sleep (milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000)
    // exec("find /",
    //     { timeout: 10000, maxBuffer: 20000 * 1024 },
    //     function (error, stdout, stderr) {
    //         var body = `<html>
    //     <body>
    //         <div class="login-page-wrap">
    //             <form action="/login" method="POST">
    //                 <div>
    //                     <label>name: </label>
    //                     <input type="text" name="username">
    //                 </div>
    //                 <div class="margin-top-md">
    //                     <label>password: </label>
    //                     <input type="password" name="password">
    //                 </div>
    //                 <div class="margin-top-md text-center">
    //                     <input type="reset" value="Reset">
    //                     <input type="submit" value="Submit">
    //                 </div>
    //             </form>
    //         </div>
    //     </body>
    //     <style>
    //         body{
    //             background-image: linear-gradient(to bottom right, #beccc0, #d8ddd7)
    //         }
    //         .login-page-wrap{
    //             width: 300px;
    //             margin: 20% auto;
    //         }
    //         label{
    //             width: 75px;
    //             display: inline-block;
    //             text-align: right;
    //         }
    //         .margin-top-md{
    //             margin-top:16px;
    //         }
    //         .text-center{
    //             text-align: center;
    //         }
    //     </style>
    // </html>`

    //         res.writeHead(200, { 'Content-Type': 'text/html' })
    //         res.write(body)
    //         res.end()
    //     });
    var body = `<html>
        <body>
            <div class="login-page-wrap">
                <form action="/login" method="POST">
                    <div>
                        <label>name: </label>
                        <input type="text" name="username">
                    </div>
                    <div class="margin-top-md">
                        <label>password: </label>
                        <input type="password" name="password">
                    </div>
                    <div class="margin-top-md text-center">
                        <input type="reset" value="Reset">
                        <input type="submit" value="Submit">
                    </div>
                </form>
            </div>
        </body>
        <style>
            body{
                background-image: linear-gradient(to bottom right, #beccc0, #d8ddd7)
            }
            .login-page-wrap{
                width: 300px;
                margin: 20% auto;
            }
            label{
                width: 75px;
                display: inline-block;
                text-align: right;
            }
            .margin-top-md{
                margin-top:16px;
            }
            .text-center{
                text-align: center;
            }
        </style>
    </html>`

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(body)
    res.end()

}

exports.login = login