'use strict';

var mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
	Task.find({}, function(err, task) {
		if (err)
			res.send(err);
		res.json(task);
	});
};

exports.create_a_task = function(req, res) {
	var new_task = newTask(req.body);
	new_task
}