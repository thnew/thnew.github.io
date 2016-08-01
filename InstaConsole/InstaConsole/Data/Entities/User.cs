using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InstaConsole.Data.Entities
{
    public class User : IEntiity
    {
        public string Username { get; set; }

        public ICollection<Subscription> FollowerNotes { get; set; }
        public ICollection<Subscription> Subscriptions { get; set; }
    }
}