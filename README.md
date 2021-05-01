# Is Halal Bros open?

> [ishalalbrosopen.com](https://ishalalbrosopen.com/)

![screenshot](https://user-images.githubusercontent.com/6625384/116795341-e1350a80-aa99-11eb-9e87-f81dd6a2d433.png)

### API

```javascript
fetch("https://n.sshh.io/halalbros").then(resp => resp.json()).then(halalStatus => {
  let guadStatus = halalStatus.find(h => h.street_address === '2712 Guadalupe St');
  console.log(guadStatus)
})
// {"conveyances":["pickup"],"postal_code":"78705","path":"/halalbros/campus","open":true,"address_subpremise":"","address_country":"US","name":"Guadalupe (W. Campus) Pickup","address_region":"TX","longitude":-97.741646,"address_locality":"Austin","latitude":30.2925322,"offline":true,"street_address":"2712 Guadalupe St"}
```

### Notice

This is in no way affiliated with [https://thehalalbros.com/](thehalalbros.com) or the company itself.