//const ville1 = require('./ville.ts');
//const agence = require('./agence');
const list = require('./listControl');
const hotel1 = require('./hotel');
const image1 = require('./image');
const aeroport = require('./aeroport');
//*************************************************
// *********************api rafahia******************
const clientCompany = require('./clientCompany');
const trip = require('./trip');
const driver = require('./driver');
const passeport = require('./passeport');
const personalGroup = require('./personalGroup');
const vehiculeFleet = require('./vehiculeFleet');
const price = require('./price');
const passengerLuggage = require('./passengerLuggage');
const proformaInvoice = require('./proformaInvoice');
const stopover = require('./stopover');
const inspection = require('./technicalInspection');
const insurance = require('./vehiculeInsurance');
const maintenance = require('./vehiculeMaintenance');
const tva = require('./tva');
const tripDriver = require('./tripDriver');
const tripUsualCustomer = require('./tripUsualCustomer');
const tripClientCompany = require('./tripClientCompany');
const tradeMargin = require('./tradeMargin');
const rent = require('./rent');
const usualCustomer = require('./usualCustomer');
const rentDriver = require('./rentDriver');
// *********************api rafahia******************
var nodemailer = require('nodemailer');
const poolConfig = {
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'reservation.tasnimevoyages@gmail.com',
        pass: 'Dotcom2016+',
    },
};
const transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'reservation.tasnimevoyages@gmail.com',
        pass: 'Dotcom2016+',
    },
});
module.exports = Object.freeze(poolConfig);
module.exports = {
    list,
    hotel1,
    image1,
    aeroport,
    //***rafahia***** */
    clientCompany,
    trip,
    driver,
    passeport,
    personalGroup,
    vehiculeFleet,
    price,
    passengerLuggage,
    proformaInvoice,
    stopover,
    inspection,
    insurance,
    maintenance,
    tva,
    tripDriver,
    tripUsualCustomer,
    tripClientCompany,
    tradeMargin,
    rent,
    usualCustomer,
    rentDriver,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxxREFBcUQ7QUFFckQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXZDLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUM7QUFDRixNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQzdDLElBQUksRUFBRSxJQUFJO0lBQ1YsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLHNDQUFzQztRQUM1QyxJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUMzQyxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsSUFBSTtJQUNKLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsSUFBSTtJQUNKLE1BQU07SUFDTixTQUFTO0lBQ1QsYUFBYTtJQUNiLGFBQWE7SUFDYixLQUFLO0lBQ0wsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsR0FBRztJQUNILFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxJQUFJO0lBQ0osYUFBYTtJQUNiLFVBQVU7Q0FFWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCB2aWxsZTEgPSByZXF1aXJlKCcuL3ZpbGxlLnRzJyk7XG4vL2NvbnN0IGFnZW5jZSA9IHJlcXVpcmUoJy4vYWdlbmNlJyk7XG5jb25zdCBsaXN0ID0gcmVxdWlyZSgnLi9saXN0Q29udHJvbCcpO1xuY29uc3QgaG90ZWwxID0gcmVxdWlyZSgnLi9ob3RlbCcpO1xuY29uc3QgaW1hZ2UxID0gcmVxdWlyZSgnLi9pbWFnZScpO1xuXG5jb25zdCBhZXJvcG9ydCA9IHJlcXVpcmUoJy4vYWVyb3BvcnQnKTtcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuY29uc3QgY2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vY2xpZW50Q29tcGFueScpO1xuY29uc3QgdHJpcCA9IHJlcXVpcmUoJy4vdHJpcCcpO1xuY29uc3QgZHJpdmVyID0gcmVxdWlyZSgnLi9kcml2ZXInKTtcbmNvbnN0IHBhc3NlcG9ydCA9IHJlcXVpcmUoJy4vcGFzc2Vwb3J0Jyk7XG5jb25zdCBwZXJzb25hbEdyb3VwID0gcmVxdWlyZSgnLi9wZXJzb25hbEdyb3VwJyk7XG5jb25zdCB2ZWhpY3VsZUZsZWV0ID0gcmVxdWlyZSgnLi92ZWhpY3VsZUZsZWV0Jyk7XG5jb25zdCBwcmljZSA9IHJlcXVpcmUoJy4vcHJpY2UnKTtcbmNvbnN0IHBhc3Nlbmdlckx1Z2dhZ2UgPSByZXF1aXJlKCcuL3Bhc3Nlbmdlckx1Z2dhZ2UnKTtcbmNvbnN0IHByb2Zvcm1hSW52b2ljZSA9IHJlcXVpcmUoJy4vcHJvZm9ybWFJbnZvaWNlJyk7XG5jb25zdCBzdG9wb3ZlciA9IHJlcXVpcmUoJy4vc3RvcG92ZXInKTtcbmNvbnN0IGluc3BlY3Rpb24gPSByZXF1aXJlKCcuL3RlY2huaWNhbEluc3BlY3Rpb24nKTtcbmNvbnN0IGluc3VyYW5jZSA9IHJlcXVpcmUoJy4vdmVoaWN1bGVJbnN1cmFuY2UnKTtcbmNvbnN0IG1haW50ZW5hbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZU1haW50ZW5hbmNlJyk7XG5jb25zdCB0dmEgPSByZXF1aXJlKCcuL3R2YScpO1xuY29uc3QgdHJpcERyaXZlciA9IHJlcXVpcmUoJy4vdHJpcERyaXZlcicpO1xuY29uc3QgdHJpcFVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuL3RyaXBVc3VhbEN1c3RvbWVyJyk7XG5jb25zdCB0cmlwQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vdHJpcENsaWVudENvbXBhbnknKTtcbmNvbnN0IHRyYWRlTWFyZ2luID0gcmVxdWlyZSgnLi90cmFkZU1hcmdpbicpO1xuY29uc3QgcmVudCA9IHJlcXVpcmUoJy4vcmVudCcpO1xuY29uc3QgdXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vdXN1YWxDdXN0b21lcicpO1xuY29uc3QgcmVudERyaXZlciA9IHJlcXVpcmUoJy4vcmVudERyaXZlcicpO1xuLy8gKioqKioqKioqKioqKioqKioqKioqYXBpIHJhZmFoaWEqKioqKioqKioqKioqKioqKipcblxudmFyIG5vZGVtYWlsZXIgPSByZXF1aXJlKCdub2RlbWFpbGVyJyk7XG5cbmNvbnN0IHBvb2xDb25maWcgPSB7XG4gIHBvb2w6IHRydWUsXG4gIGhvc3Q6ICdzbXRwLmdtYWlsLmNvbScsXG4gIHBvcnQ6IDQ2NSxcbiAgc2VjdXJlOiB0cnVlLFxuICBhdXRoOiB7XG4gICAgdXNlcjogJ3Jlc2VydmF0aW9uLnRhc25pbWV2b3lhZ2VzQGdtYWlsLmNvbScsXG4gICAgcGFzczogJ0RvdGNvbTIwMTYrJyxcbiAgfSxcbn07XG5jb25zdCB0cmFuc3BvcnRlciA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHtcbiAgcG9vbDogdHJ1ZSxcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAncmVzZXJ2YXRpb24udGFzbmltZXZveWFnZXNAZ21haWwuY29tJyxcbiAgICBwYXNzOiAnRG90Y29tMjAxNisnLFxuICB9LFxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5mcmVlemUocG9vbENvbmZpZyk7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbGlzdCxcbiAgaG90ZWwxLFxuICBpbWFnZTEsXG4gIGFlcm9wb3J0LFxuICAvLyoqKnJhZmFoaWEqKioqKiAqL1xuICBjbGllbnRDb21wYW55LFxuICB0cmlwLFxuICBkcml2ZXIsXG4gIHBhc3NlcG9ydCxcbiAgcGVyc29uYWxHcm91cCxcbiAgdmVoaWN1bGVGbGVldCxcbiAgcHJpY2UsXG4gIHBhc3Nlbmdlckx1Z2dhZ2UsXG4gIHByb2Zvcm1hSW52b2ljZSxcbiAgc3RvcG92ZXIsXG4gIGluc3BlY3Rpb24sXG4gIGluc3VyYW5jZSxcbiAgbWFpbnRlbmFuY2UsXG4gIHR2YSxcbiAgdHJpcERyaXZlcixcbiAgdHJpcFVzdWFsQ3VzdG9tZXIsXG4gIHRyaXBDbGllbnRDb21wYW55LFxuICB0cmFkZU1hcmdpbixcbiAgcmVudCxcbiAgdXN1YWxDdXN0b21lcixcbiAgcmVudERyaXZlcixcbiAgLy8qKioqcmFmYWhpYSoqKiogKi9cbn07XG4iXX0=