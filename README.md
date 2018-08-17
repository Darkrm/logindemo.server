# loginDemo server

Authentication server written in JavaScript that can be run with node.js, it employs the latest ECMAScript features like async/await to produce clean well written code. Account data is stored in postgres and state for sessions are kept in redis. Sessions are tracked with json web tokens. express.js is used and routes and logic are split making it easier to modify the codebase. All logic is wrapped in try catch protecting it from crashing because of unhandled errors. Json is the data exchange.

One way you could use this is for a micro service that provides authentication into a larger enterprise app.

If you run this stand-alone you would need to configure your own postgres, redis and web (for the [client](https://github.com/Darkrm/logindemo.client)) server but if you have [Docker Compose](https://docs.docker.com/compose/) I’ve taken the guess work out for you to get this up and running. Checkout the repo [here](https://github.com/Darkrm/logindemo.docker).

A seed account is added to the database at runtime to allow you to login.

login : test@test.com<br>
password : test

## License

The contents of this repository is not licensed out. You may not run, copy, modify or use anypart of it without the express written consent of the copyright holder.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
