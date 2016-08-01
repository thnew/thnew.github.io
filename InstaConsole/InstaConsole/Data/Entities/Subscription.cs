using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Data.Entities
{
    public class Subscription : IEntiity
    {
        public string StartingAt { get; set; }
        public string Duration { get; set; }

        public User Owner { get; set; }
    }
}