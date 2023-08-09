// import {Response} from "express";
// import {Trips} from "../models/entity/Trips";
// import {AppDataSource} from "../models/data-source";
// const tesseract = require("node-tesseract-ocr")
// import {TripRepo} from "../../index";
//
// const ReadText = require('text-from-image');
// export default class TripController {
//
//     static async createTrip(req, res) {
//         try {
//             let {date, pickUp, dropOf, driver, firstKm, lastKm, image} = req.body
//             const tripDate = {
//                 date: date,
//                 pickUp: pickUp,
//                 dropOf: dropOf,
//                 driver: driver,
//                 firstKm: firstKm,
//                 lastKm: lastKm
//             }
//             console.log(req.file)
//             const config = {
//                 lang: "eng",
//                 oem: 1,
//                 psm: 3,
//             }
//             // ReadText(req.file,{lang: 'eng',
//             //     tessedit_char_whitelist: '0123456789'}).then(text => console.log(text)).catch(err => console.log(err))
//             tesseract
//                 .recognize('https://tesseract.projectnaptha.com/img/eng_bw.png', config)
//                 .then((text) => {
//                     console.log("Result:", text)
//                 })
//                 .catch((error) => {
//                     console.log(error.message)
//                 })
//             const trip = await TripRepo.save(tripDate)
//             if (trip) {
//                 return res.status(200).json({
//                     message: 'tao thanh cong',
//                     trip: trip
//                 })
//             }
//         } catch (e) {
//             res.status(500).json({
//                 message: e.message
//             })
//         }
//     }
//
//     static async getAllTrip(req, res) {
//         try {
//             const trips = await TripRepo.find()
//             if (trips) {
//                 return res.status(200).json({message: 'done', trips: trips})
//             }
//
//         } catch (e) {
//             res.status(500).json({
//                 message: e.message
//             })
//         }
//     }
//
//     static async updateTrip(req, res) {
//         try {
//             let tripSearch = await TripRepo.findOneBy({id: req.params.id})
//             if (!tripSearch) {
//                 return res.status(500).json({
//                     message: 'khong co chuyen nay'
//                 })
//             }
//             await TripRepo.update({id: req.params.id}, req.body)
//             return res.status(200).json({
//                 message: 'cap nhap thanh cong'
//             })
//         } catch (e) {
//             res.status(500).json({
//                 message: e.message
//             })
//         }
//     }
//
//     static async deleteTrip(req, res) {
//         try {
//             let tripSearch = await TripRepo.findOneBy({id: req.params.id})
//             if (!tripSearch) {
//                 return res.status(500).json({
//                     message: 'khong co chuyen nay'
//                 })
//             }
//             await TripRepo.delete({id: req.params.id})
//             return res.status(200).json({
//                 message: 'xoa thanh cong'
//             })
//
//         } catch (e) {
//             res.status(500).json({
//                 message: e.message
//             })
//         }
//     }
//
// }
//
//
