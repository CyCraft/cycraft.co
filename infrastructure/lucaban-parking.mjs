export default {
  fetch(request) {
    const url = new URL(request.url)
    if (url.protocol === 'http:') {
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }

    if (url.pathname === '/.well-known/security.txt') {
      return new Response('Contact: mailto:security@cycraft.co\nExpires: 2027-11-01T00:00:00Z\nPreferred-Languages: en\n', {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      })
    }

    return new Response('Not Found\n', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  },
}
