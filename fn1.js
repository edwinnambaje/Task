convertFahrToCelsius = (Fahr) => {

  if (Fahr == null) {
    return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)
  }
  else {
    let regex = /[a-zA-Z]/
    regexResult = regex.test(Fahr)
    if (regexResult === true && typeof Fahr !== 'object' && Fahr !== null) {
      return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)

    }
    else if (Array.isArray(Fahr) === true) {
      return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)
    }
    else if (typeof Fahr === 'object' && typeof Fahr !== null && !Array.isArray(Fahr)) {
      return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)
    }
    else {
      let F = Number(Fahr)

      let C = ((F - 32) * 100) / 180
      return (C.toFixed(4));
    }
  }

}
convertFahrToCelsius()

