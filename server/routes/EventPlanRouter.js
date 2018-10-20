const express = require('express');
const app = express();
const EventPlanRouter = express.Router();

const EventPlan = require('../models/EventPlan');

EventPlanRouter.route('/add').post(function (req, res) {
  const eventPlan = new EventPlan(req.body);

    eventPlan.save(function(err, result){
      if(err) {
        res.status(400).send("unable to save to database");
      } else {
        response = { msg:'Event Plan added successfully', id: result._id };
      }
      res.json(response);
    });

});

EventPlanRouter.route('/').get(function (req, res) {
  EventPlan.find(function (err, eventPlans){
    if(err){
      console.log(err);
    }
    else {
      res.json(eventPlans);
    }
  });
});

EventPlanRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  EventPlan.findById(id, function (err, eventPlan){
      res.json(eventPlan);
  });
});

EventPlanRouter.route('/update/:id').post(function (req, res) {
  EventPlan.findById(req.params.id, function(err, eventPlan) {
    if (!eventPlan)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      eventPlan.eventName = req.body.eventName;
      eventPlan.date = req.body.date;
      eventPlan.meal = req.body.meal;
      eventPlan.venue = req.body.venue;

      eventPlan.save().then(eventPlan => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

EventPlanRouter.route('/delete/:id').get(function (req, res) {
  EventPlan.findByIdAndRemove({_id: req.params.id},
       function(err, eventPlan){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = EventPlanRouter;