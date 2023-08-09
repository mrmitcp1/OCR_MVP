import express from "express";
import TripController from "../controllers/Trip.controller";

export const TripRouter = express.Router();

TripRouter.post('/trips',TripController.createTrip)
TripRouter.get('/trips',TripController.getAllTrip)
TripRouter.put('/trips/:id',TripController.updateTrip)
TripRouter.delete('/trips/:id',TripController.deleteTrip)