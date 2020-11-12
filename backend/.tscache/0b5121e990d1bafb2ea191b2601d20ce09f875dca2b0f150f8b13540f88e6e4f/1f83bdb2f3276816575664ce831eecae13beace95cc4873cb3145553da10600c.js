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
const usualCustomerClientCompany = require('./usualCustomerClientCompany');
const rentClientCompany = require('./rentClientCompany');
const rentUsualCustomer = require('./rentUsualCustomer');
const rentWithDriverClientCompany = require('./rentWithDriverClientCompany');
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
    usualCustomerClientCompany,
    rentClientCompany,
    rentUsualCustomer,
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyIsInNvdXJjZXMiOlsiL3Zhci93d3cvaHRtbC9hcGlfdHJhbnNmZXJzL3NlcnZlci9jb250cm9sbGVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUM7QUFDdkMscUNBQXFDO0FBQ3JDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN0QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRWxDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxtREFBbUQ7QUFFbkQscURBQXFEO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3JELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0MsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMzQyxNQUFNLDBCQUEwQixHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQzNFLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUN6RCxNQUFNLDJCQUEyQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRTdFLHFEQUFxRDtBQUVyRCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFdkMsTUFBTSxVQUFVLEdBQUc7SUFDakIsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxHQUFHO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQztBQUNGLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDN0MsSUFBSSxFQUFFLElBQUk7SUFDVixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxHQUFHO0lBQ1QsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsc0NBQXNDO1FBQzVDLElBQUksRUFBRSxhQUFhO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJO0lBQ0osTUFBTTtJQUNOLE1BQU07SUFDTixRQUFRO0lBQ1Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixJQUFJO0lBQ0osTUFBTTtJQUNOLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLEtBQUs7SUFDTCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxHQUFHO0lBQ0gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLElBQUk7SUFDSixhQUFhO0lBQ2IsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0NBRWxCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IHZpbGxlMSA9IHJlcXVpcmUoJy4vdmlsbGUudHMnKTtcbi8vY29uc3QgYWdlbmNlID0gcmVxdWlyZSgnLi9hZ2VuY2UnKTtcbmNvbnN0IGxpc3QgPSByZXF1aXJlKCcuL2xpc3RDb250cm9sJyk7XG5jb25zdCBob3RlbDEgPSByZXF1aXJlKCcuL2hvdGVsJyk7XG5jb25zdCBpbWFnZTEgPSByZXF1aXJlKCcuL2ltYWdlJyk7XG5cbmNvbnN0IGFlcm9wb3J0ID0gcmVxdWlyZSgnLi9hZXJvcG9ydCcpO1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKmFwaSByYWZhaGlhKioqKioqKioqKioqKioqKioqXG5jb25zdCBjbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi9jbGllbnRDb21wYW55Jyk7XG5jb25zdCB0cmlwID0gcmVxdWlyZSgnLi90cmlwJyk7XG5jb25zdCBkcml2ZXIgPSByZXF1aXJlKCcuL2RyaXZlcicpO1xuY29uc3QgcGFzc2Vwb3J0ID0gcmVxdWlyZSgnLi9wYXNzZXBvcnQnKTtcbmNvbnN0IHBlcnNvbmFsR3JvdXAgPSByZXF1aXJlKCcuL3BlcnNvbmFsR3JvdXAnKTtcbmNvbnN0IHZlaGljdWxlRmxlZXQgPSByZXF1aXJlKCcuL3ZlaGljdWxlRmxlZXQnKTtcbmNvbnN0IHByaWNlID0gcmVxdWlyZSgnLi9wcmljZScpO1xuY29uc3QgcGFzc2VuZ2VyTHVnZ2FnZSA9IHJlcXVpcmUoJy4vcGFzc2VuZ2VyTHVnZ2FnZScpO1xuY29uc3QgcHJvZm9ybWFJbnZvaWNlID0gcmVxdWlyZSgnLi9wcm9mb3JtYUludm9pY2UnKTtcbmNvbnN0IHN0b3BvdmVyID0gcmVxdWlyZSgnLi9zdG9wb3ZlcicpO1xuY29uc3QgaW5zcGVjdGlvbiA9IHJlcXVpcmUoJy4vdGVjaG5pY2FsSW5zcGVjdGlvbicpO1xuY29uc3QgaW5zdXJhbmNlID0gcmVxdWlyZSgnLi92ZWhpY3VsZUluc3VyYW5jZScpO1xuY29uc3QgbWFpbnRlbmFuY2UgPSByZXF1aXJlKCcuL3ZlaGljdWxlTWFpbnRlbmFuY2UnKTtcbmNvbnN0IHR2YSA9IHJlcXVpcmUoJy4vdHZhJyk7XG5jb25zdCB0cmlwRHJpdmVyID0gcmVxdWlyZSgnLi90cmlwRHJpdmVyJyk7XG5jb25zdCB0cmlwVXN1YWxDdXN0b21lciA9IHJlcXVpcmUoJy4vdHJpcFVzdWFsQ3VzdG9tZXInKTtcbmNvbnN0IHRyaXBDbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi90cmlwQ2xpZW50Q29tcGFueScpO1xuY29uc3QgdHJhZGVNYXJnaW4gPSByZXF1aXJlKCcuL3RyYWRlTWFyZ2luJyk7XG5jb25zdCByZW50ID0gcmVxdWlyZSgnLi9yZW50Jyk7XG5jb25zdCB1c3VhbEN1c3RvbWVyID0gcmVxdWlyZSgnLi91c3VhbEN1c3RvbWVyJyk7XG5jb25zdCByZW50RHJpdmVyID0gcmVxdWlyZSgnLi9yZW50RHJpdmVyJyk7XG5jb25zdCB1c3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueSA9IHJlcXVpcmUoJy4vdXN1YWxDdXN0b21lckNsaWVudENvbXBhbnknKTtcbmNvbnN0IHJlbnRDbGllbnRDb21wYW55ID0gcmVxdWlyZSgnLi9yZW50Q2xpZW50Q29tcGFueScpO1xuY29uc3QgcmVudFVzdWFsQ3VzdG9tZXIgPSByZXF1aXJlKCcuL3JlbnRVc3VhbEN1c3RvbWVyJyk7XG5jb25zdCByZW50V2l0aERyaXZlckNsaWVudENvbXBhbnkgPSByZXF1aXJlKCcuL3JlbnRXaXRoRHJpdmVyQ2xpZW50Q29tcGFueScpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKiphcGkgcmFmYWhpYSoqKioqKioqKioqKioqKioqKlxuXG52YXIgbm9kZW1haWxlciA9IHJlcXVpcmUoJ25vZGVtYWlsZXInKTtcblxuY29uc3QgcG9vbENvbmZpZyA9IHtcbiAgcG9vbDogdHJ1ZSxcbiAgaG9zdDogJ3NtdHAuZ21haWwuY29tJyxcbiAgcG9ydDogNDY1LFxuICBzZWN1cmU6IHRydWUsXG4gIGF1dGg6IHtcbiAgICB1c2VyOiAncmVzZXJ2YXRpb24udGFzbmltZXZveWFnZXNAZ21haWwuY29tJyxcbiAgICBwYXNzOiAnRG90Y29tMjAxNisnLFxuICB9LFxufTtcbmNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICBwb29sOiB0cnVlLFxuICBob3N0OiAnc210cC5nbWFpbC5jb20nLFxuICBwb3J0OiA0NjUsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgYXV0aDoge1xuICAgIHVzZXI6ICdyZXNlcnZhdGlvbi50YXNuaW1ldm95YWdlc0BnbWFpbC5jb20nLFxuICAgIHBhc3M6ICdEb3Rjb20yMDE2KycsXG4gIH0sXG59KTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmZyZWV6ZShwb29sQ29uZmlnKTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBsaXN0LFxuICBob3RlbDEsXG4gIGltYWdlMSxcbiAgYWVyb3BvcnQsXG4gIC8vKioqcmFmYWhpYSoqKioqICovXG4gIGNsaWVudENvbXBhbnksXG4gIHRyaXAsXG4gIGRyaXZlcixcbiAgcGFzc2Vwb3J0LFxuICBwZXJzb25hbEdyb3VwLFxuICB2ZWhpY3VsZUZsZWV0LFxuICBwcmljZSxcbiAgcGFzc2VuZ2VyTHVnZ2FnZSxcbiAgcHJvZm9ybWFJbnZvaWNlLFxuICBzdG9wb3ZlcixcbiAgaW5zcGVjdGlvbixcbiAgaW5zdXJhbmNlLFxuICBtYWludGVuYW5jZSxcbiAgdHZhLFxuICB0cmlwRHJpdmVyLFxuICB0cmlwVXN1YWxDdXN0b21lcixcbiAgdHJpcENsaWVudENvbXBhbnksXG4gIHRyYWRlTWFyZ2luLFxuICByZW50LFxuICB1c3VhbEN1c3RvbWVyLFxuICByZW50RHJpdmVyLFxuICB1c3VhbEN1c3RvbWVyQ2xpZW50Q29tcGFueSxcbiAgcmVudENsaWVudENvbXBhbnksXG4gIHJlbnRVc3VhbEN1c3RvbWVyLFxuICAvLyoqKipyYWZhaGlhKioqKiAqL1xufTtcbiJdfQ==