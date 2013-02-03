<?php
namespace Application\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="tx_prompc_domain_model_currency")
 */
class Currency extends Model
{
    /**
     * @ORM\Column(type="string")
     */
    protected $code;

}
