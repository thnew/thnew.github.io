using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Exceptions.ScriptApiExceptions
{
    public class TargetAttributeNotSetException : Exception
    {
        public TargetAttributeNotSetException()
            : base("ScriptApiException: Target attribute not set!")
        { }
    }
}