import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Nav = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <div>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    a
                    <a href="/">
                      {" "}
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAACZCAMAAAB+KoMCAAAAvVBMVEX///8ATJgAre4ASpcASZcAPpIAQpQAQJMAR5YARZUAPZIAO5EAqe0Aq+4AOZD8/P0ANo/g5O319vnM0+LU2ufAydzs7vSkss5rhbQRT5mf1faVpcYtXJ+Fmb/m6fCercuwvNRBaKV8krvFzd9zi7dpwfLO6PpTc6qtudJdeq6Nn8IiVpw7ZKODyvSv3PdNb6js9v1Su/HZ7vsALoyCyvTC4/k4tO+S0PVjf7C03vgAo+zF5flyxfPX7PtdvvGJBQWdAAAR1ElEQVR4nO1d6WLaOBAOyJavBGNjzH3TcCYkaZrQbtr3f6y1OYwtfTIomE2T9fej2y1GlkajuUdcXeXIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhzvhl/p13q9Xt/76Il8Ztjd/nBQLpkqpVRTrdI6p+a74FaHS0s19MIBeqn30bP6lHB1qhQYkHL1o6f1KdExWEoGfDn56Fl9SrQoT0pifvSsPhB2iHd9s67zpCyU097z7kn+7bC9/rw+GSwDDOpTV/r7K05UBlzZ5h5zvX6rPlmFr5mMa04WM/+74PQmhKpUV7bQNUVWYbg64UlpjBPP+NVhW1GD1+zeY2jaxM9uEX8BnFa7zKpfUpY0CismON9WbEP8zrKsGkqS4MQwvhBjVieUN2MChqrLDdPTwPluxOSEayBh+oWUvEMsdDILBWUlN9AY2EJGJ/5ED6j4kHO/DFsOIK9wYu4oJvw4RE1QyaFwz9QvY8Z74GCG0KZy49Q5rtStWfKRJZAjX4mUiJ1ClCTPnUPjtFQMk9SrjOXIUzuEWcluLR+MKRRhpCBrQTuzsqVRalCqmuX2cMRbpsi1lN+zvxj4hBtr+ZHsyrQ378x7fQ8b+HO4aQ15b+BvhW8gbUAvEB8bIq5Ultm/6KOASXkJCTZDUlmXtF//ZkBSkkscO6jBtX72L/ooOEiCyRrop8BdIPbXvo7WufIQKek8+xfBPSOL7F/0YaioYIXqKPsXjVDA4xJ79mGoIlKWLyAqoQ9eOlG92a6b4ZRcN9Ph9qgBu1LhQ7bH4fqON6pWq14XzxKF2Y+fb9erDSeLcrlUKpW19qzTd+K+g+uEb6x6jnuKR+F7/U59tSiFgwXDlc32aj2sVbonLvAokOFsDOXGsL3pcNXWS6YawFLbdcRrbRTKS3+RP501LGrsY1dE0Q3VbI/30mc6aZTUzStLjeW6lxphdavDAbE0IxExJYphUEsddLLJ2K+B4SwTYrC93sDQtGCK0RyJYdU5LnHL4HybaTK5MtM0EAFUDLUw96+u+g1Vj/8rVZU16/bv392fUC7sHP+uucrCkEA5GfP0NIG7KFEwR5WL0aEwe5r5Wh2UcCQ1/B6l82GJ/9QwdTBgt6OoQjLuoJsRY/rzZbtdf4feRdaespSIZWDPmo9SIK0j9vS9gQpDchExDRgbobzA8McGniGz5r16qJXrFcdrldbSGVEfBGSlwr4OdDwLtMY8h4J5mkCQuONyKiFFIDp7nOy5hefHz2W791MrYM+QihNpLwWdOzlnDkd0OYOxAFYksLm8xSl8BMBpMW+pcq8lmLR0Q0q/7PntRqFdvbIbUlQIMAW2EJWSwTgMSVvJp5CvI0iR9cx3sWSAMsOUNYsZSaFqoMRVCjiVbLa1NrlyVPuq8t2/6stahCDyRRpSI+DYMcvZfeAJUJT0sOvWaSeSh85kQMZmciTdXLVGnuNUamuDlWs7sT2bBpvu2iEpXaTC0gAUODujI+jD2DEbpUMZSRRAd1eo9khRFMG5TIyXfGed2T01ZvH4PZok5vetBp+MAlJSfRkIcZsTvEfAyxJeY6QDkpLQ5DxsIFFJm1eS7oInuaEuBoNBm2pHzj0TRWYpqSWltz2Mp//V3Yf1XkDKqwoJPKCuIafDuyV+Spac7Q9JqQySD/ngIcD97pLT84o13iQ4bGe6KqUSMymeewwlDe5tlUa0bXS1I1t1sZGVrWBXenKH86rKL5FQuSFgmCJZTYCDJhrH/faS40najkmBygrFXqJ5x+WFx1rwJd7Vdle71dNBxICLqa/bV3bwH9lSH6B+ZUtP5kiDa4yoRGpe4+Y64XaFMvmKmiIogWDP94JhYKwAxput0WLmuPN9u8GOIRv+A1qHNWOOAaa3CSNnkKhUWA055I4I5dyhbltkcyYyezWWfQWrCgSq8j3xkdNuzGu91XfJkoort8FrHUsyQ4ZMdDb5ZYNYBpf06HFy22Ak7gYzQT1J/ATz7rAoQjMstdnDUenMhn1ptxEmCeRsABulbNR+8iEUQWf9IY+zJwmBUxlDgZlQdH3ufcIUai+j6mOgfVndewxdFHRhPUJUqM4szmWlW8BnAk4aw3RU/JjyDr/I3c8MwHCWzbYgJ15hNdcACAErSW4+bsqbL3tMwHBq7JyC2OjFk0hAzslWliG/kZXxSCQz3N+32AeIOBRwzN4f8SLg0qlNHxjopqTnicpX2OS2Bzg3aXm64HgwpukBUyAsE4FBJE/Uy7a2AcNZevfA2VVYjxBVVye5n7eoWNfzABu54wlFh+wzQi/acgkMZ9kMmQviVdwYIH9EjLj3ATS8eCIwbm/FCY8ycgWlcclCEPBK1ow5Bo+TcXxBgo1EZSIaiMxbUU4Vhu2Th6mNy+vp5apiXSBzypJZYeSBlxhx6wCRrCdkGy8AxJG+GfKuEpIXmrohvTVJR+50AFHJibljAJV+nGWKIvXxWncf+NWmyJAYgX1hJK+IlAEtlxcSmCiWIVvuCE4bV+aK6jLiPSZDnrPJQrClNpSDTLoZPxNCMYcXqTIGyle2McIBMqLE7jyQhEQ7fNwF4Wc2SBcB2Tlc1BcWxe5eTBcX8Hu6iKMktVztBIaCGbKYKES5ClFjlKPBs8uoe0zv/fxKk8yqhPZAVmXjfFHJyQiYITsIAR8wpdC6XWF+Y+wOD8rTCIaRtfoBfopkhgzWdnDmFPKHYkmPzgme5x5TVKNZ4A+TSO/sQLR2tnYReJ9sY0SF337C9dKiWEYhEv7IPxc18/iC0h/uMHGRXxaKNc5Q/aAMmWxjBHA8uHZ61DcQCx0hh1pkkqGqu83zbBRZoOfjoA3ZOLkYQGMUSpJjAIbjHD4Y9j0cYFh2ifV3VSQC+QhaBThhDEgpsz4XZFxLZshQZIkTlShDdnAtkSckKIV3UdnRBiCu2zpOy4L2jpY5PDEesvFRlAJn63YQ5xIleghXHEE5httNQ4DErCBtwdAyG76sADLIZshQxIcVlTBDFj2EIh2CrqGqkM+IgZ5HtazcgjMJYiKNoUhmyMCJ42ozkdQ6yFPYrApNIRAc3kMgl2qm2OnZr1jWJYEA506XzJChlh9OVCLP4yDbYOwR2hEwILSFyMv0Z8D6Z76awdUd3aM5guNAcs5kxRZKaR3kKbQ5UQUrrpfbQlxa21fEG7AFFzCQBwp8yWbITslFIAv84Bb6yKVGXUN+GklS6sXcmZnOmLJZAwB0bYgwm4LRRVKQtS+81JQWbGVDgT7RbSmbeacWQvYLqRKTFKTWjADIIFnteyxMsQVyBA6RPCgqgdZhK/wSOBKu9lepjHm24gGZYun7cMao54HVGMjXM6PZo6YhIGc8HFrbk/JYL0Mrrcj17BtlYPa6LzcGqo2njMawQcaKLKKHoIblRJ/d3m8arKI+zgKxolR+1We64tDdRz5DChzUHsbGGWGGLIrk+dDq1th5RDVCyhLlEk8IZ/kDoQFw7i0hSBkI0ykCIBuAD/uiXpZo8rAXvdBgtEgUpCQavAfgpHwzW5meGSmR3Sx7Hw4Sldy8ULJBi4IVuCOgnRQSh3yGNvdR6JeTzxAdQdT43AOOLGNNbnugjOD8FORiqxHXwRwMQ0p7sd+ywN6ExtOJOniO+fJMtYOCYwVVLpaBkmyFEnM2fWg3Rh/jm4eS7msUDwpvy4NXO55qDnegvFTPc3eQmJOt9oVXYbDXj42QPD24vUhGMKRsRZth9jDtycn9NSjHRozz7nVFfrHsNVTIuuYsPHSCY0FRaFYmDng/CtFtClfRxNkQm5iwLsptSvol7JCoZ122LmMNtpgbA3Yu96OPMSlj/fajyDbf9lOgFgKmz2iaUtWIKvck/RIGWHhLGgUoP8pG4ZGBHrfAISlj6UYv2nOyUWjw1qeEQOgOVKsvnDMo9j5T68ArzE+8WsjdKSd4FQbbSttFMjmmmjApo1G8QxfitmbXR9mdOCl7VE+TVA5fpW2clcOFmeeTfB23vyY7pYFqorktRqqJxHqDMSn3tKjq0ce7VijkYMVIaa83gQuxyc5z5ZkxNqx7hRfr7+CP5uFt3HQnW6B1zZqV8McQYk6VoExKC0PQ9vyQmzF2xIX7F5HS3zWaiS834cJU5yYkoDVXIFWvK7haxhnV6gNqGiGT7MUhtK5NxkZDkiR+HpEvFIKuevPFYa+UvZ0GL1/f6+BD/zPbGHmYD/u+M5XOFb4JuqCqgdG9qnd602rFC1Gp9mvz8aRBDFXT9yUm+9MDqcCSEjlVcVIKK86UxJUM0bBQX+6MITfWtWtiZ9Bm+9WIdV61C6oe341MNtdBaaq5hRre3auQRGRrf0E3svA4UsJ0Q4yUaQmbw6zUIz77NrC3pvGv9NHKuZ0TlhafiNTiw6PrUnajwFoxttcO+afxXiUo+9jnSweyYNJvuoSShWAE8aXHurrquXkdfJnNiYiSBdAKYKIsvO0RIt4WcvzGEWLFGvDhAd/KHMYYIFaddQgrrGCjkhWQHPxjk09dWBQ6gKRkpDgWJXHWFVzKHnuhGfccoNrZGDR8cMUgrbh51+2wXqM2Obfn9oQaLzHUKIMFSclEjzEp49l2VBGYgJm4FAL/dkJoh8JyOWPVGzm+73crvQl3G446O7t7GaUAT4VxCFfgutpk0RGsUgsIfnjCTedKwtj8grLJQBXCWBdRqLq5qtLkbuAjpmT5BAK2Kk+CHrN9cdVo8t4NG5Myno5D1dOH0bj2L2yIBrbuSO6sGTSLNglR5exx0EE8+oWPZtK8wKIwlnG8clNuYqJtLpQo5HNfeEEjgKLVM6meTulpSX9/qZO4GlbwMz2L+PIFdXw0pp36KCwSgpTGQJitIRerNXCFiXAh1jKjmv6UijAxiGEOGPOb74UPoZcTSnwGV258j0WhOgJyE3gE0e1YgeAL5Irwppfko7razqwFqnaCWZyEQs3CmN/IFlcKSqg6YYz0JccsikaGiRjCHBiXhilqYOAvxyHqIjRn7bF19Lzpqg6vIX4n7HgJDVF0Pfz9utA5jEmt7f8qoReplqzBvALXVS2Yxv5LwdO0RDpcnMXulLWD9iSGVh7UWAlY1ZOGCjHKM3Huyh7Gb8RVDKtR283Om5Sp+E7bQJuXJ9OMf6CvtVDDH0umqtZoT9br9azdXiwaDV2n1tb3tgxdbzQW7UG9UxulhTGr64WyuXXa1BerFl6+21s1aPiQqRYWa7gWO5gR1cO7AIOtpeZimB758luDBrXCi6dpY9mJc5lfmyyoSo0dc2yjCgFDaCptDOajS/wIp9fvzeetvhdbl+t2u463g9PtnngFu931NheTC+Jzu7GdSvDMyBOzhF1pzQaNQmmxnM0rJ6x4O2LF4SdpO9XecD0ZLBqLQrkU/DmYrIe1KnjyK8N23ex+vTX8JdhwvK/7c7A5cuTIkSNHjhw5cuT4z2E/PN3+vG++3t3dfdvirnl/+/DR0/pMsB/+aT7/efl1vcHNzc3mjxDXwV+vf728NW8fckfuGJ5+Pj8WA9Jd3xTFCIn78nb/O3tyfpUNerr/U0ynYYKe19fFx+Ztdou3b++Kt5mN9nEI1vFyfTIZ4/T80/x9fuDLvW3+CSTHF6Dk03NAR1ky7ql5E3Ln7/e/3P3nNZQp18X77Bb0QXCbLxw7bnTN9ZZNb3bKJ507fz3Kc6f98Lv5Vty85abYvMji/ks83BXj/LghYfHx29vr/c9/fj89hHi6/XH/Gqj0jSZPI2fx8e7n02nC8+Hp5+u3l/2A18XXT29jPbxFDBkSqvj43PzxJPqx1NBIensJiS0kZzjGy3OK8ek+3P5sBkZCMbYt18Xmp9fcD3dbQm6U8XPzNOvbfvp591hMU1EbifAScPbzazPC8/O3P48vO0s1QfzHn5de5+XRDCRUsOxf4bGUFHPu0/1b8Ve6xr9JAgmH4B/vni6zuP8StwEpioGh/f6lPPx4TWfPdASy9duPDBf0UXDfAoMwA3/a/X3/9pKujkR0fP7xJRKx9o8svb6Hf17/4BOMqXh989g8UdP/LxGq942pLTRBN8ZqoN/OkCn/I4S2zuvbn62mZvDyZ2NpffQUPx3CWGdg2W/w4/b2KQ/K5ciRI0eOHDly5MiRI0eOHP9T/Av98kYmGfAwPwAAAABJRU5ErkJggg=="
                        alt="Workflow"
                      />
                    </a>
                    <a href="/">
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="data:image/png;base64,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"
                        alt="Workflow"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  {localStorage.getItem("token") ? (
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://scontent.ftun12-1.fna.fbcdn.net/v/t1.6435-1/p200x200/82616258_2767122270068358_1164141595566538752_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=aOvqBnFDyvYAX-Y1tuQ&_nc_ht=scontent.ftun12-1.fna&tp=6&oh=a9a0e8108926f853ac497f089969a689&oe=60D990BE"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/profile"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/"
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  ) : (
                    <a href="/login" style={{ backgroundColor: "white" }}>
                      Sign In
                    </a>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default Nav;
