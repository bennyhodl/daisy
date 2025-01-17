export const isImage = (url: string) => url.match(/\.(jpeg|jpg|gif|png)$/) !== null

export const isUrl = (url: string) => url.match(urlRegex) !== null

export const isMention = (text: string) => text.match(isNoteMention) !== null

export const urlRegex =
  /((?:http|ftp|https):\/\/(?:[\w+?\.\w+])+(?:[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?)/i

export const isNoteMention = /(#\[[0-9]+])/

export const noteOrUrlRegex =
  /(#\[[0-9]+])|((?:http|ftp|https):\/\/(?:[\w+?\.\w+])+(?:[a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?)/i
