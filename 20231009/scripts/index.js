function desen()
        {
            msg =  document.frm.closedmsg.value

            result = ""
            temp = ""
            for (i = 0; i < msg.length; i++)
            {
                temp = msg.charCodeAt(i)-2
                temp = String.fromCharCode(temp)
                result += temp
            }

            document.getElementById("desencriptada").innerText = result
        }
        function encriptar()
        {
            msg =  String(document.frm.openmsg.value)

            result = ""
            temp = ""
            for (i = 0; i < msg.length; i++)
            {
                temp = msg.charCodeAt(i) + 2

                temp = String.fromCharCode(temp)

                result += temp
            }

            document.getElementById("encriptada").innerText = result
        }