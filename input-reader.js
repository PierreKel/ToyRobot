module.exports = function InputReader(executor) {
	
	// Tell the standard input that we are working with utf8
	process.stdin.setEncoding('utf8');

	// Event handler on standard input stream
	// triggered when data is available to be read
	// This event handler assume that any chunk read will contain
	// all characters of the last line.
	// This is a dangerous assumption. but is working for all small input files
	// I suspect this will break if you have a large input file and one of the
	// lines id split over two chunks.
	process.stdin.on('readable', function() {
		var chunk = process.stdin.read();
		if (chunk !== null) {
			var arr = chunk.split('\n');
			for (idx = 0; idx < arr.length; ++idx) {
				var str = arr[idx].trim();
				if (str != ""){
					executor.ExecuteCommand(str);
				}
			}
		}
	});

	// Listening on process for 'SIGINT' rather that listening on process.stdin for 'end'
	// allow the program to function identically with input from the keyboard
	// as well as redirecting stdin to a file like "node ToyRobot.js < input.txt".
	// With Redirect input it terminates when the end of the file is reached
	// With keyboard input it terminates when ^C (Crtl C) is pressed.
	process.on('SIGINT', function() {
		process.stdout.write('end');
		process.exit(0);
	});
}