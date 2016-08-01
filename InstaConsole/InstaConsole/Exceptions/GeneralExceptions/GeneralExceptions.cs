using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Exceptions.GeneralExceptions
{
    public class NotYetImplementedException : Exception
    {
        public NotYetImplementedException()
            : base("Method not yet implemented!")
        { }
    }
}