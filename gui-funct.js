function appendToDroidOutput(msg) { getDroidOutput().value += msg; };
function setStatus(msg)           { getStatus().innerHTML = msg; };

function backgroundProcess() {
    const process = require('child_process');   // The power of Node.JS

    // var ls = process.spawn('ls', ['-l']);
    var ls = process.spawn('./test.sh');

    ls.stdout.on('data', function (data) {
      // console.log('stdout: <' + data+'> ');
          // appendToDroidOutput(data);
      appendToDroidOutput('stdout: <' + data+'> \n');
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      // console.log('child process exited with code ' + code);
          if (code == 0)
         setStatus('child process complete.');
          else
         setStatus('child process exited with code ' + code);
          getDroidOutput().style.background = "DarkGray";
    });
};
